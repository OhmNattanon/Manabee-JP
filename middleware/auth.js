const { User } = require("../models");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");

//check registered email and username
const regisVar = async (req, res, next) => {
  try {
    const doesEmailExist = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    const doesUsernameExist = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (doesEmailExist && doesUsernameExist) {
      return res.status(500).send("Invalid email & Username");
    } else if (doesEmailExist) {
      return res.status(500).send("Invalid email");
    } else if (doesUsernameExist) {
      return res.status(500).send("Invalid Username");
    } else {
      return next();
    }
  } catch (error) {
    console.log(error);
  }
};

//check register password
const passwordVar = async (req, res, next) => {
  try {
    const errMes =
      "password must be at least 6 charactors long and must contain numeric charactor";
    const password = await req.body.password;
    const passArr = password.split("");
    if (password.length < 6) {
      return res.status(500).send(errMes);
    }
    for (const i of passArr) {
      if (isNaN(i) === false) {
        return next();
      }
    }
  } catch (error) {
    console.log(error);
  }
};

//check user login username and password
const loginVar = async (req, res, next) => {
  const { username } = req.body;
  // console.log(`req.body`, req.body);
  try {
    const thisUser = await User.findOne({
      where: {
        username: username,
      },
    });
    const doesMatch = await bcrypt.compare(
      req.body.password,
      thisUser.password
    );
    if (doesMatch) {
      next();
    } else {
      res.status(401).json({ msg: "incorrect username or password" });
    }
  } catch (error) {
    // console.log("11111xxx");
    res.status(500).json({ err: error });
    // console.log(error);
  }
};

module.exports = {
  regisVar,
  passwordVar,
  loginVar,
};
