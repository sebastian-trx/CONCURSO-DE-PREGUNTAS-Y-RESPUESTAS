const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("user", {
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    nickName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password:{
      type:DataTypes.STRING
    },
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  { timestamps: false});
};
