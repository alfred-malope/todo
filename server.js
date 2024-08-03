const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const taskRoutes = require("./routes/taskRoutes")

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json())

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("We are in mongo baby"))
  .catch((err) => console.error("We are in mongo baby"));

app.use("/task" , taskRoutes)

app.listen(port, () => {
  console.log(`Sercer is running on http://localhost:${port}`);
});
