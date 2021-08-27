const dollarsToCents = require("dollars-to-cents");
const { order } = require("../model");

const stripe = require("stripe")(
  "sk_test_51JQAaHChqZJrMNXYCLicwmmxP2A2BQJq0msSyWO9YbXlSJosWj1SCyhhhp2LfXrMKTW7scPbVTe7ydV3Vbhuh7Jm00QD5YyMzX"
);

const createPaymentIntent = async (
  { body: { fullname, address, phone, email, products } },
  res
) => {
  try {
    if (!address) {
      throw new Error("Aдрес обязателен");
    }

    const productsIds = products.map(({ _id }) => _id);
    const amount = products.reduce((acc, cur) => {
      return acc + Number(cur.price);
    }, 0);
    const prepareOrder = {
      fullname,
      phone,
      email,
      address,
      products: productsIds,
      amount,
    };

    const newOrder = await new order(prepareOrder);
    const saveOrder = await newOrder.save();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: dollarsToCents(amount),
      currency: "eur",
      payment_method_types: ["card"],
    });
    return res.send(200, { paymentIntent, saveOrder });
  } catch (error) {
    res.status(500).send(error);
  }
};

const stripeWebHook = async ({ body }, res) => {
  try {
    console.log(body);
    return res.status(200).send("success");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createPaymentIntent,
  stripeWebHook,
};
