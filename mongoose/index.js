const { type } = require("express/lib/response");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/triel");

// the fields add with the schema will get stored in the table
const productSchema = new mongoose.Schema({
  name: String,
  price: { type: Number, required: true },
  category: String,
  stock: Number,
});

const saveMongoose = async () => {
  try {
    const ProductsModel = mongoose.model("triel", productSchema, "triel");

    let data = new ProductsModel({
      name: "Product 1",
      price: 100,
      category: "c",
      stock: 100,
    });

    let result = await data.save();
    console.log(result);
    console.log(
      "--------------------------------------------------------------------------------"
    );
  } catch (error) {
    for (let field in error.errors) {
      console.log(error.errors[field].message);
      console.log(
        "--------------------------------------------------------------------------------"
      );
    }
  }
};

// saveMongoose();

const updateDb = async () => {
  const Product = mongoose.model("triel", productSchema, "triel");

  const updateResult = await Product.updateMany(
    { name: "Product 1" },
    {
      $set: {
        name: "Product 1 Updated",
        price: 100,
        category: "c",
        stock: 1,
      },
    }
  );
};

// updateDb();

const deleteMongoose = async () => {
  const Product = mongoose.model("triel", productSchema, "triel");
  const data = await Product.deleteMany({ name: "Product 1 Updated" });
  console.log(data);
};

// deleteMongoose();

const findMongoose = async () => {
  const Product = mongoose.model("triel", productSchema, "triel");
  const data = await Product.find({ name: "Product 3" });
  console.log(data);
};

findMongoose();
