const { Router } = require("express");
const router = Router();
const {
  postCategory,
  categoryInfo,
 } = require("../controllers/categoryController.js");

router.post("/",postCategory);
router.get("/", categoryInfo);



module.exports = router;