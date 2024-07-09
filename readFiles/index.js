const { isUtf8 } = require("buffer");
const fs = require("fs");
const path = require("path");
const dirName = path.join(__dirname, "/files");
const filePath = `${dirName}/file0.txt`;

/* for (let i = 0; i < 5; i++) {
  fs.writeFileSync(dirName + "/file" + i + ".txt", "file" + i);
}
 */

fs.readFile(filePath, "utf8", (err, item) => {
  console.log(item);
});

fs.appendFile(filePath, "append file", (err) => {
  if (!err) {
    console.log("File Updated");
  } else {
    console.log(err);
  }
});

fs.rename(filePath, `${dirName}/fileRenamed.txt`, (err) => {
  if (!err) {
    console.log("file renamed");
  } else {
    console.log(err);
  }
});

fs.unlinkSync(dirName + "/file2.txt");
