const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");
const { routes } = require("./scr/routes");

console.log(process.env.MONGO_HOST);
// Подключение к бд
mongoose.connect("mongodb://localhost:27017/mevnshop", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// инициалищируем проложение
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes.forEach((item) => {
  app.use(`/api/v1/${item}`, require(`./scr/routes/${item}`));
});

// Наши роуты
const PORT = 3000;

http.createServer({}, app).listen(PORT);
console.log(`Server run on ${PORT}`);
