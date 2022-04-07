const { Router } = require("express");
const router = Router();
const {
  postQuestion,
  questionInfo,
 } = require("../controllers/questionController.js");

router.post("/",postQuestion);
router.get("/", questionInfo);



module.exports = router;