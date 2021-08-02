const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user-router');
const taskRouter = require('./routers/task-router');
const multer = require('multer');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const upload = multer({
  dest: 'images',
});

app.post('/upload', upload.single('upload'), (req, res) => {
  res.send(req.file);
});

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
