const express = require("express");
const app = express();
const reqFilter = require("./middleware");
const route = express.Router();

route.use(reqFilter);
// app.use(requestFilter);

app.get("", (req, res) => {
  const query = req.query;
  console.log(query.purpose + " " + query.name);
  res.send("<h1>Hello: starting point!</h1>");
});

route.get("/about", reqFilter, (req, res) => {
  res.send("Hello : about page!");
});

route.get("/help", (req, res) => {
  res.send({
    name: "sudrshan",
    details: { company: "Metamind System Private Limited" },
  });
});

app.use("/", route);

app.listen(5000, () => {
  console.log(`Server started on port`);
});
