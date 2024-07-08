const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname);

for (let i = 0; i < 5; i++) {
  fs.writeFileSync("hello" + i + ".txt", "text file " + i);
}

fs.readdir(dirPath, (err, files) => {
  files.forEach((el) => {
    console.log(el);
  });
});
