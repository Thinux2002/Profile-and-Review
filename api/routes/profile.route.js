const express = require("express");

const router = express.Router();

const { display, update } = require("../controllers/profile.controller.js");

router.post("/display", display);
router.patch("/update/:id", update);

module.exports = router;
