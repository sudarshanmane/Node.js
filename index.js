const http = require("http");

const firstHandler = (request, response) => {
  response.write("<h1>First Handlerrr</h1>");
};

http.createServer(firstHandler).listen(4500);
