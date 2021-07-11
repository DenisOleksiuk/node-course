require("../src/db/mongoose");
const Task = require("../src/modules/task");

// Task.findByIdAndDelete("60e0ae3a0c9b612b4e747dc4")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

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
