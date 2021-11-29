import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "postgres://postgres:izhan@localhost:5432/familyfeuddb"
);

export { Sequelize, sequelize };
