const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  stock: Number,
});

const schema = mongoose.model("triel", productSchema, "triel");
module.exports = schema;
