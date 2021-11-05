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
    const updateProgress = await Progress.update(
      {
        courseId: req.body.completed,
      },
      {
        where: {
          UserId: req.body.id,
        },
      }
    );
    res.send(updateProgress);
  } catch (error) {
    console.log(error);
  }
};

//update game score
const updateScore_progress = async (req, res) => {
  try {
    const updateScore = await Progress.update(
      {
        score: req.body.score,
      },
      {
        where: {
          userId: req.body.id,
        },
      }
    );
    res.send(updateScore);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAll_progress,
  getByUserId_progress,
  updateCourse_progress,
  updateScore_progress,
};
