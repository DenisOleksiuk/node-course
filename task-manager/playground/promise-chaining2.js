require("../src/db/mongoose");
const Task = require("../src/modules/task");

const deleteTaskAndCount = async (id, completed) => {
  const task = await Task.findByIdAndDelete(id);
  console.log(task);
  const count = await Task.countDocuments(completed);
  return count;
};

deleteTaskAndCount("60e9fa2ed9e8582c9a052489", { completed: true })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
