const express = require("express");
const reqFilter = require("./middleware");
const app = express();
const route = express.Router();

route.use(reqFilter);

app.get("/home", (req, res) => {
  res.send("Hello, This is first page.");
});

route.get("/about", (req, res) => {
  const query = req.query;
  res.send("Hello, This is about page and your age is " + query.age);
});
 
app.use("/", route);

app.get("/contact", (req, res) => {
  res.send("Hello, This is contact page.");
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
