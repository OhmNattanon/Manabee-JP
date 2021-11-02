require("dotenv").config();
const { Course } = require("../models");

//get all course
const getAll_course = async (req, res) => {
  const allCourse = await Course.findAll();
  res.send(allCourse);
};

//get by course id
const getById_course = async (req, res) => {
  try {
    const thisCourse = await Course.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(thisCourse);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAll_course,
  getById_course,
};
