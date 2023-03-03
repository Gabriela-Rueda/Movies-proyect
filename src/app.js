const express = require('express')

const responseHandlers = require('./utils/handleResponses')
const db = require('./utils/database')
const initModels = require('./models/initModels')
const config= require('../config').api
const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
const passportJwt= require('./middlewares/auth.middleware')
const upload = require('./utils/multer')
const moviesRouter = require('./movies/movies.router')
const genreRouter = require('./genres/genres.router')
const app = express()

app.use(express.json())

db.authenticate()
    .then(() => console.log('Database authenticated'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('Database Synced'))
    .catch(err => console.log(err))

initModels()

app.get('/', (req, res) => {
    responseHandlers.success({
        res,
        status: 200,
        message: 'Servidor inicializado correctamente',
        data: {
            "users": `${config.host}/api/v1/users`,
        }
    })
})

app.get('/query', (req, res) => {
    res.status(200).json({
        myQueryGenre: req.query.genre, 
        queries: req.query
    })
})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/movies', moviesRouter)
app.use('/api/v1/genres', genreRouter)

//? Esta debe ser la ultima ruta en mi app
app.use('*', (req, res)=> {
    responseHandlers.error({
        res,
        status: 404,
        message: `URL not found, please try with ${config.host}`,
    })
})

app.listen(9000,() => {
    console.log('Server started at port 9000')
})