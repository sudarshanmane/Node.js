const { createServer } = require("http");
const data = require("./data");

const secondHandler = (request, response) => {
  response.writeHead(201, { "Content-Type": "application/json" });
  response.write(JSON.stringify(data));
  response.end();
};

createServer(secondHandler).listen(6000);
