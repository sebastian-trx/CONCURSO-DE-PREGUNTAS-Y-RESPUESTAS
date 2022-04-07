const { Router } = require("express");

const user = require("./userRouting.js");
const question = require("./questionRouting.js");
const category = require("./categoryRouting.js");
const login = require("./loginRouting.js");
const session  = require('./sessionRouting');

const router = Router();

router.use("/user", user);
router.use("/question", question);
router.use("/category", category);
router.use("/login", login);
router.use("/session", session);



module.exports = router;