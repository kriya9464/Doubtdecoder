const express = require("express");
const router = express.Router();

const questionRouter = require("./Question");
const answerRouter = require("./Answer");
const likeRouter = require('./like');

router.get("/", (req, res) => {
  res.send("This api is reserved ");
});

router.use("/questions", questionRouter);
router.use("/answers", answerRouter);
router.use("/likes",likeRouter);

module.exports = router;