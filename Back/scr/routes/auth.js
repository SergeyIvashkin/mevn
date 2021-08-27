const { auth } = require("../controllers");
const express = require("express");

const router = express.Router();

router.route("/login").post(auth.login);
router.route("/signup").post(auth.signUp);
// router.route("/refresh").post(auth.refreshToken);
// router.route("/logout").post(auth.logout);

module.exports = router;
