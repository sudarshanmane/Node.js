module.exports = requestFilter = (request, response, next) => {
  if (!request.query.age) {
    response.send("Please Provide Age!");
  } else if (request.query.age < 13) {
    response.send("You can not access this page!");
  } else {
    next();
  }
};
