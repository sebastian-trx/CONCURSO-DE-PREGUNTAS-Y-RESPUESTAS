const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("question", {
    questionTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answerOptions: {
      type: DataTypes.STRING,
      get: function () {
        return JSON.parse(this.getDataValue("answerOptions"));
      },
      set: function (val) {
        return this.setDataValue("answerOptions", JSON.stringify(val));
      },
    },
    level: {
      type: DataTypes.INTEGER,
      timestamps: false
    },
    
  },
  { timestamps: false});
};
