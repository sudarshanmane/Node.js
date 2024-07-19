const dbConnection = require("./mongodb");

const deleteRecords = async () => {
  const data = await dbConnection();
  const result = await data.deleteOne({ name: "Product 2" }, {});
  console.log(result);
};

deleteRecords();
