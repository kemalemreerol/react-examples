const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://admin:1234@cluster0.lj5bnyz.mongodb.net/food-order?retryWrites=true&w=majority";

mongoose.connect(mongoURL);

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB bağlantısı başarılıdır.");
});
db.on("error", () => {
  console.log("Mongo DB Bağlantısı Hatalıdır.");
});

module.exports = mongoose;
