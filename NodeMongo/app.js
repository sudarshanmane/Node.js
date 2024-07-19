const express = require("express");
const dbConnection = require("./mongodb");
const mongodb = require("mongodb");
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

app.get("", async (req, res) => {
  let data = await dbConnection();
  let result = await data.find().toArray();
  res.send(result);
});

app.post("", async (req, res) => {
  console.log(req.body);
  let data = await dbConnection();
  let result = await data.insertOne(req.body);
  res.send(JSON.stringify(res));
});

// update
app.put("", async (req, res) => {
  let data = await dbConnection();
  let result = await data.updateOne(req.query, {
    $set: req.body,
  });

  res.send(JSON.stringify(result));
});

// update with id
app.put("/update-with-id/:id", async (req, res) => {
  let data = await dbConnection();

  let result = await data.updateOne(
    { name: req.params.id },
    { $set: req.body }
  );

  res.send(JSON.stringify(result));
});

// delete
app.delete("/:id", async (req, res) => {
  let data = await dbConnection();
  let result = await data.deleteOne({
    id: req.params.id,
  });

  res.send(JSON.stringify(result));
});

app.listen(5000, () => {
  console.log("server started");
});
