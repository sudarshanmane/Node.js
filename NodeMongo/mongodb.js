const { MongoClient, Collection } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "triel";

const dbConnection = async () => {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("triel");
};

module.exports = dbConnection;

const main = async () => {
  let data = await dbConnection();
  data = await data.find().toArray();
  console.log("data", data);
};

// main();
