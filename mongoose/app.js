const express = require("express");
const app = express();
require("./config");
app.use(express.json());
const Product = require("./product");

app.post("/create", async (req, res) => {
  const data = new Product(req.body);
  let result = await data.save();
  res.send("successfully saved!");
});

app.get("/get-product-details", async (req, res) => {
  let result = await Product.find();
  res.send(result);
});

app.delete("/delete-products/:name/", async (req, res) => {
  let result = await Product.deleteOne({ name: req.params.name });
  res.send(result);
});

app.put("/update-product/:name", async (req, res) => {
  let result = await Product.updateOne(
    { name: req.params.name },
    {
      $set: req.body,
    }
  );
  res.send(result);
});

app.listen("5000");
