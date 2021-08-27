const mongoose = require("mongoose");

const {
  model,
  Schema,
  Schema: {
    Types: { ObjectId },
  },
} = mongoose;

const schema = new Schema({
  address: {
    type: String,
    default: "",
  },
  fullname: {
    type: String,
    default: "",
  },
  phone: {
    type: Number,
    default: "",
  },
  amount: {
    type: Number,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    ref: "Pending",
  },
  products: {
    type: Array,
    ref: "Products",
  },
  clientSecret: {
    type: String,
    default: "",
  },
});

module.exports = model("order", schema);
