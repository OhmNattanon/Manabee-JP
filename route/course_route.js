const express = require("express");
const course_controller = require("../controllers/course-controller");
const router = express.Router();

const { Course } = require("../models/user");

router.get("/:id", course_controller.getById_course);
router.get("/all", course_controller.getAll_course);

module.exports = router;
