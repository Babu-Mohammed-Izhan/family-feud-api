import {
  CreateService,
  FindAllService,
  FindOneService,
} from "../controllers/question.controller";
import { Router } from "express";

export const questionRouter = Router();

questionRouter.post("/", CreateService);

questionRouter.get("/", FindAllService);

questionRouter.get("/:id", FindOneService);
