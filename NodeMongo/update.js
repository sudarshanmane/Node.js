const dbConnection = require("./mongodb");

const updateRecord = async () => {
  let data = await dbConnection();
  let result = await data.updateMany(
    { name: "Product 1 changed 3" },
    { $set: { name: "Product 1 changed 4" } }
  );

  console.log(result);
};

updateRecord();
