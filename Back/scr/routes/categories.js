// const Router = require("express-promise-router");
const express = require("express");

const router = express.Router();

const { category } = require("../controllers");

router.route("/:id").get(category.get);
router.route("/").post(category.create);
router.route("/").get(category.getAll);
router.route("/:id").put(category.update);
router.route("/:id").delete(category.delete);

module.exports = router;
