const { log } = require("console");
const fs = require("fs");
const input = process.argv;

try {
  if (input[2] == "add") {
    console.log(input);
    fs.writeFileSync(input[3], input[4]);
  } else if (input[2] == "remove") {
    fs.unlinkSync(input[3]);
  } else {
    console.log("invalid input");
  }
} catch (error) {
  console.log("error");
}
