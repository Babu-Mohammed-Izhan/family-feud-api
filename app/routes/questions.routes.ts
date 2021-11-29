module.exports = (app) => {
  const questions = require("../controllers/question.controller");

  var router = require("express").Router();

  router.post("/", questions.create);

  router.get("/", questions.findAll);

  router.get("/:id", questions.findOne);

  app.use("/api", router);
};
