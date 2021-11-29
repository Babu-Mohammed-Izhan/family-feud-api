import express, { Request, Response } from "express";
import cors from "cors";
import { sequelize } from "./app/models/index";
import { questionRouter } from "./app/routes/questions.routes";

const app = express();

app.use(cors());

sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_req: Request, res: Response) =>
  res.status(200).send({
    message: "Hello World!",
  })
);

app.use("/api", questionRouter);

const port = 5000;

app.listen(port, () => {
  console.log("App is now running at port ", port);
});
