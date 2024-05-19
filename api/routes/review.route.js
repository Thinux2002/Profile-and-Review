const express = require("express");

const router = express.Router();

const {
  addreview,
  displayreview,
  updatereview,
  deleteReview,
} = require("../controllers/review.controller.js");

router.post("/add", addreview);
router.post("/display", displayreview);
router.patch("/update/:id", updatereview);
router.delete("/delete/:id", deleteReview);

module.exports = router;
