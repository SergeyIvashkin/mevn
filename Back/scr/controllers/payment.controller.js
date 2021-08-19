const dollarsToCents = require("dollars-to-cents");

const stripe = require("stripe")(
  "sk_test_51JQAaHChqZJrMNXYCLicwmmxP2A2BQJq0msSyWO9YbXlSJosWj1SCyhhhp2LfXrMKTW7scPbVTe7ydV3Vbhuh7Jm00QD5YyMzX"
);

const createPaymentIntent = async ({ body: { amount } }, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: dollarsToCents(amount),
      currency: "eur",
      payment_method_types: ["card"],
    });
    return res.status(200).send(paymentIntent);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createPaymentIntent,
};
