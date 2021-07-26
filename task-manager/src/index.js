const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user-router');
const taskRouter = require('./routers/task-router');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});

const Task = require('./modules/task');
const User = require('./modules/user');

const main = async () => {
  const user = await User.findById('60f5ea7815561709c8661dc7');
  await user.populate('tasks').execPopulate();
  console.log(user.tasks);
};

// main();
