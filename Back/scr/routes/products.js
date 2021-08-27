// const router = require("express-promise-router");
const express = require("express");

const router = express.Router();

const { product } = require("../controllers");
const { checkJWTSign } = require("../middlewares/jwtCheck.middleware");

router.route("/:id").get(product.get);
router.route("/").post(product.create);
router.route("/").get(checkJWTSign, product.getAll);
router.route("/:id").put(product.update);
router.route("/:id").delete(product.delete);

module.exports = router;
