const express = require("express");
const progress_controller = require("../controllers/progress-controller");
const router = express.Router();

router.get("/all", progress_controller.getAll_progress);
router.post("/by-id", progress_controller.getByUserId_progress);
router.patch("/course", progress_controller.updateCourse_progress);

module.exports = router;
