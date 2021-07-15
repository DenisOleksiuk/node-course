const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user-router");
const taskRouter = require("./routers/task-router");
const bcryptjs = require("bcryptjs");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const myFn = async () => {
  const pass = "red123!";
  const hash = await bcryptjs.hash(pass, 8);
  const isMatch = await bcryptjs.compare("red123!", hash);
};
