const { Router } = require("express");
const router = Router();
const {
  postUser,
  putUser,
  userInfo,
 } = require("../controllers/userController.js");

router.post("/", postUser);
router.put("/", putUser);
router.get("/", userInfo);



module.exports = router;