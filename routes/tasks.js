const express = require("express");
const router = express.Router();
const {
  getalltask,
  posttask,
  patchtask,
  deletetask,
  getsingletask,
} = require("../controllers/tasks");

router.route("/").get(getalltask).post(posttask);
router.route("/:id").patch(patchtask).delete(deletetask).get(getsingletask);

module.exports = router;
