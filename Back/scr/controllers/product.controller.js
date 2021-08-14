const genericCrud = require("./generic.controller");
const { product } = require("../model");

// console.log(...genericCrud(category));
module.exports = {
  ...genericCrud(product),
};
