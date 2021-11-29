import { Sequelize } from "sequelize";
import { QuestionType, QuestionFactory } from "./questions.model";

const dbconfig = new Sequelize(
  "postgres://postgres:izhan@localhost:5432/familyfeuddb"
);

interface dbtype {
  Sequelize: Sequelize;
  sequelize: Sequelize;
  questions: QuestionType;
}

type database = dbtype;

const db: database = {
  Sequelize,
  sequelize: dbconfig,
  questions: QuestionFactory(dbconfig),
};

export { db };
