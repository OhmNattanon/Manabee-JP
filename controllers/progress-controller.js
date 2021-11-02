require("dotenv").config();
const { Progress } = require("../models");

const getAll_progress = async (req, res) => {
  try {
    const allProgress = await Progress.findAll();
    res.send(allProgress);
  } catch (error) {
    console.log(error);
  }
};
//get progress per user
const getByUserId_progress = async (req, res) => {
  try {
    const byIdProgress = await Progress.findOne({
      where: {
        userId: req.body.id,
      },
    });
    res.send(byIdProgress);
  } catch (error) {
    console.log(error);
  }
};

//update progress
const updateCourse_progress = async (req, res) => {
  try {
    thisUserProgress.update(
      {
        courseId: req.body.completed,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    res.send(thisUserProgress);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAll_progress,
  getByUserId_progress,
  updateCourse_progress,
};
