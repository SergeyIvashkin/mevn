const express = require("express");

const router = express.Router();

const { payment } = require("../controllers");

router.route("/").post(payment.createPaymentIntent);
router.route("/stripe").post(payment.stripeWebHook);

module.exports = router;
