const http = require("http");
const colors = require("colors");
const data = require("./data");

const firstHandler = (request, response) => {
  response.writeHead(201, { "Content-Type": "application/json" });
  response.write(JSON.stringify(data));

  response.end();
};

http.createServer(firstHandler).listen(6000);
