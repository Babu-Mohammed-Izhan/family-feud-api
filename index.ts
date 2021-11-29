import express, { Request, Response } from "express";
import cors from "cors";
import { db } from "./app/models/index";

const app = express();

app.use(cors());

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_req: Request, res: Response) =>
  res.status(200).send({
    message: "Hello World!",
  })
);

require("./app/routes/questions.routes")(app);

const port = 5000;

app.listen(port, () => {
  console.log("App is now running at port ", port);
});
