const { DataTypes } = require("sequelize");

const db = require("../utils/database");
const Series = require("./series.models");

const Seasons = db.define("seasons", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  title:{
    type:DataTypes.STRING,
    allowNull:false
  },
  seasonNumber:{
  type:DataTypes.SMALLINT,
    allowNull:false,
    defaultValue:1
  },
  releaseYear:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  serieId:{
    type:DataTypes.UUID,
    references:{
      model:Series,
      key:'id'
    }
  },
  trailerUrl:{
   type:DataTypes.STRING,
   allowNull:false
  },
  coverUrl:{
    type:DataTypes.STRING,
    allowNull:false
  }
  
  
});

module.exports = Seasons