const express = require("express");
const cors = require("cors");
const db = require("./app/models");

const app = express();

app.use(cors());

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) =>
  res.status(200).send({
    message: "Hello World!",
  })
);

require("./app/routes/questions.routes")(app);

const port = 5000;

app.listen(port, () => {
  console.log("App is now running at port ", port);
});
