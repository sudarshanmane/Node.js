const dbConnection = require("./mongodb");
const insertHandler = async () => {
  try {
    const db = await dbConnection();
    const result = await db.insertOne({
      name: "Product 2",
      price: 30,
      category: "Category 2",
      stock: 39,
    });

    console.log("Document inserted:", result.insertedId);
  } catch (error) {
    console.error("Error inserting document:", error);
  }
};

// insertHandler();
