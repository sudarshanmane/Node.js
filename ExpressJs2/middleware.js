module.exports = reqFilter = (req, res, next) => {
  let query = req.query.age > 13;

  if (query) {
    res.send("validated");
  } else {
    next();
  }
};
