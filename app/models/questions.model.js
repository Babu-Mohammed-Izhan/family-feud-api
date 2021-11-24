module.exports = (sequelize, Sequelize) => {
  const Question = sequelize.define("question", {
    question: {
      type: Sequelize.STRING,
    },
    a1: {
      type: Sequelize.STRING,
    },
    a2: {
      type: Sequelize.STRING,
    },
    a3: {
      type: Sequelize.STRING,
    },
    a4: {
      type: Sequelize.STRING,
    },
    a5: {
      type: Sequelize.STRING,
    },
    a6: {
      type: Sequelize.STRING,
    },
    a7: {
      type: Sequelize.STRING,
    },
  });
};
