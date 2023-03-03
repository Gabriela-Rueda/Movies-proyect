require('dotenv').config()// este comando nos ayuda a poder utilizar las variables de entorno que estan en otro arcivhog
const configs = {
    api: {
        port: process.env.PORT || 9000,
        host: process.env.HOST || 'http://localhost:9000',
        nodeEnv: process.env.NODE_ENV || 'development',
        secretOrKey: process.env.JWT_SECRET,
        firebase: { 
            apiKey: process.env.FIREBASE_API_KEY,
             authDomain: process.env.FIREBASE_AUTH_DOM,
             projectId: process.env.FIREBASE_PROJECT_ID,
             storageBucket: process.env.FIREBASE_STORAGE_BUCKET }
    },
    db: {
        development: {
            //? Aqui deberan estar las configuraciones para la conexion con sequelize
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'academ-movie',
            define: {
                timestamps: true, //? Nos obliga a que todas las tablas tengan la propiedad createdAt y upadtedAt
                underscored: true,
                underscoredAll: true 
            }
        },
        production: {
             // aqui van los datos reales por lo que aqui deben ir variables de 
            //? Aqui deberan estar las configuraciones para la conexion con sequelize
            dialect: 'postgres',
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            define: {
                timestamps: true, //? Nos obliga a que todas las tablas tengan la propiedad createdAt y upadtedAt
                underscored: true,
                underscoredAll: true 
            },
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        },
        testing: {
            //? Aqui deberan estar las configuraciones para la conexion con sequelize
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'chat-db',
            define: {
                timestamps: true, //? Nos obliga a que todas las tablas tengan la propiedad createdAt y upadtedAt
                underscored: true,
                underscoredAll: true 
            }
        }
    }
}

module.exports = configs
