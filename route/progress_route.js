const express = require("express");
const progress_controller = require("../controllers/progress-controller");
const router = express.Router();

router.get("/all", progress_controller.getAll_progress);
router.post("/init", progress_controller.postInitialProgress);
router.post("/by-id", progress_controller.getByUserId_progress);
router.patch("/course", progress_controller.updateCourse_progress);
router.patch("/game", progress_controller.updateScore_progress);
router.delete("/game/reset", progress_controller.resetScore_progress);

module.exports = router;
