import { Request, Response } from "express";

import Question from "../models/questions.model";

const CreateService = (req: Request, res: Response) => {
  if (!req.body.question) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const question = {
    question: req.body.question,
    a1: req.body.a1,
    a2: req.body.a2,
    a3: req.body.a3,
    a4: req.body.a4,
    a5: req.body.a5,
    a6: req.body.a6,
    a7: req.body.a7,
    a8: req.body.a8,
  };

  Question.create(question)
    .then((data: any) => {
      res.send(data);
    })
    .catch((err: { message: any }) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

const FindAllService = (_req: Request, res: Response) => {
  Question.findAll({})
    .then((data: any) => {
      res.send(data);
    })
    .catch((err: { message: any }) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

const FindOneService = (req: Request, res: Response) => {
  const id = req.params.id;

  Question.findByPk(id)
    .then((data: any) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Question with id=${id}.`,
        });
      }
    })
    .catch((_err: any) => {
      res.status(500).send({
        message: "Error retrieving Question with id=" + id,
      });
    });
};

export { CreateService, FindAllService, FindOneService };
