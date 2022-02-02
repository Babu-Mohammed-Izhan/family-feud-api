import { DataTypes } from 'sequelize';
import { sequelize } from '.';

export interface QuestionType {
  question: string;
  a1: string;
  a1Vote: number;
  a2: string;
  a2Vote: number;
  a3: string;
  a3Vote: number;
  a4: string;
  a4Vote: number;
  a5: string;
  a5Vote: number;
  a6: string;
  a6Vote: number;
  a7: string;
  a7Vote: number;
  a8: string;
  a8Vote: number;
}

const QuestionFactory = sequelize.define('question', {
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
  a1Vote: {
    type: DataTypes.INTEGER,
  },
  a2: {
    type: DataTypes.STRING,
  },
  a2Vote: {
    type: DataTypes.INTEGER,
  },
  a3: {
    type: DataTypes.STRING,
  },
  a3Vote: {
    type: DataTypes.INTEGER,
  },
  a4: {
    type: DataTypes.STRING,
  },
  a4Vote: {
    type: DataTypes.INTEGER,
  },
  a5: {
    type: DataTypes.STRING,
  },
  a5Vote: {
    type: DataTypes.INTEGER,
  },
  a6: {
    type: DataTypes.STRING,
  },
  a6Vote: {
    type: DataTypes.INTEGER,
  },
  a7: {
    type: DataTypes.STRING,
  },
  a7Vote: {
    type: DataTypes.INTEGER,
  },
  a8: {
    type: DataTypes.STRING,
  },
  a8Vote: {
    type: DataTypes.INTEGER,
  },
});

export default QuestionFactory;
