const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Info = sequelize.define("Info", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  randomNumber: Sequelize.STRING,
});

module.exports = Info;
