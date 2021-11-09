require("dotenv").config();
const { Progress, User } = require("../models");

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

//post initial progress
const postInitialProgress = async (req, res) => {
  try {
    const initProgress = await Progress.create({
      courseId: 1,
      score: 0,
      UserId: req.body.userId,
    });
    res.send(initProgress);
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
          userId: req.body.id,
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

//reset game score
const resetScore_progress = async (req, res) => {
  try {
    const reset = await Progress.update(
      {
        score: 0,
      },
      {
        where: {
          userId: req.body.id,
        },
      }
    );
    res.send(reset);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAll_progress,
  getByUserId_progress,
  updateCourse_progress,
  updateScore_progress,
  resetScore_progress,
  postInitialProgress,
};
