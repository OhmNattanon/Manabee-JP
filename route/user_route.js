const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");
const auth = require("../middleware/auth");
const { User } = require("../models/user");

// const passport = require("passport");

// const initializePassport = require("../middleware/passport");
// initializePassport(
//   passport,
//   (username) => User.findOne({ username: username }),
//   (id) => User.findOne({ id: id })
// );

router.post(
  "/register",
  auth.regisVar,
  auth.passwordVar,
  userController.regis_newUser
);
router.post("/login", auth.loginVar, userController.user_login);

router.post("/by-username", userController.getByUsername_user);

router.get("/all", userController.getAll_user);
router.get("/:id", userController.getById_user);
router.delete("/del/:id", userController.user_delete);

module.exports = router;
