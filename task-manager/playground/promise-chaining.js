require("../src/db/mongoose");
const User = require("../src/modules/user.js");

User.findByIdAndUpdate("60e09fb221d1262963cf36fa", { age: 27 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 27 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
