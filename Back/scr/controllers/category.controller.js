const genericCrud = require("./generic.controller");
const { category } = require("../model");

// console.log(...genericCrud(category));
module.exports = {
  ...genericCrud(category),
};
