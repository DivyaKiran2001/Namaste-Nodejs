const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      throw new Error("Token is not valid!!!");
    }

    const decodedObj = await jwt.verify(token, "DEV@Tinder$3010");
    const { _id } = decodedObj;

    const user = await User.findById(_id);
    console.log(user);
    if (!user) {
      throw new Error("User not found!!");
    }
    req.user = user;
    next();
    console.log("auth called");
  } catch (err) {
    res.status(400).send("ERROR:" + err.message);
  }
};

module.exports = {
  userAuth,
};
