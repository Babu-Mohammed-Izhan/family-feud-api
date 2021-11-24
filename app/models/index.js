const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "postgres://postgres:izhan@localhost:5432/familyfeuddb"
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.questions = require("./questions.model.js")(sequelize, Sequelize);

module.exports = db;
