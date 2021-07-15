const jwt = require("jsonwebtoken");
const User = require("../modules/user");

const auth = async (req, res, next) => {
  console.log("auth middleware");
  try {
    const token = req.header("Authorization");
    const decoded = jwt.verify(token, "thisMyNodejsCourse");
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error("No User");
    }

    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate" });
  }
};

module.exports = auth;
