const express = require("express");
const cors = require("cors");
const db = require("./db");
const burgerModel = require("./models/burgerModel");

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.get("/getBurgers", (req, res) => {
  burgerModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
app.listen(port, () => {
  console.log(`Food Order Server'ı ${port} portunda başarıyla çalışmaktadır.`);
});
