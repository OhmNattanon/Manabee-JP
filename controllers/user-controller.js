require("dotenv").config();

const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//get user
const getAll_user = async (req, res) => {
  const allUser = await User.findAll();
  res.send(allUser);
};

//get user by Id
const getById_user = async (req, res) => {
  try {
    const thisUser = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(thisUser);
  } catch (error) {
    console.log(error);
  }
};

//get user by username
const getByUsername_user = async (req, res) => {
  try {
    const thisUser = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    res.send(thisUser);
  } catch (error) {
    console.log(error);
  }
};

//register user
const regis_newUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPW = await bcrypt.hash(req.body.password, salt);
    const newUser = {
      Fname: req.body.Fname,
      Lname: req.body.Lname,
      email: req.body.email,
      password: hashedPW,
      username: req.body.username,
    };
    // User.create(newUser);
    const thisUser = await User.create(newUser);

    res.send({ id: thisUser.id });
  } catch {
    res.send("Register failed!");
  }
};

//logging user in
const user_login = async (req, res) => {
  try {
    const token = jwt.sign(
      { username: req.body.username, email: req.body.email, id: req.body.id },
      process.env.ACCESS_SECRET_TOKEN,
      { expiresIn: "2h" }
    );

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).send("Login Failed!");
    // console.log(err);
  }
};

//delete user
const user_delete = async (req, res) => {
  try {
    const thisUser = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send("User deleted");
  } catch (error) {
    res.status(400).send("Cannot delete user");
  }
};

module.exports = {
  regis_newUser,
  user_login,
  getAll_user,
  getById_user,
  user_delete,
  getByUsername_user,
};
