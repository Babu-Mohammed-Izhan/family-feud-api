import { DataTypes } from "sequelize";
import { sequelize } from ".";

export interface QuestionType {
  question: string;
  a1: string;
  a2: string;
  a3: string;
  a4: string;
  a5: string;
  a6: string;
  a7: string;
}

const QuestionFactory = sequelize.define("question", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  question: {
    type: DataTypes.STRING,
  },
  a1: {
    type: DataTypes.STRING,
  },
  a2: {
    type: DataTypes.STRING,
  },
  a3: {
    type: DataTypes.STRING,
  },
  a4: {
    type: DataTypes.STRING,
  },
  a5: {
    type: DataTypes.STRING,
  },
  a6: {
    type: DataTypes.STRING,
  },
  a7: {
    type: DataTypes.STRING,
  },
});

export default QuestionFactory;
