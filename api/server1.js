// const mongoose = require("mongoose");
// require("dotenv").config();
// const app = require("../src/App.js");
// const express = require("express");
// const app = express();

// const { DB_HOST, PORT = 5000 } = process.env;

// mongoose
//   .connect(DB_HOST)
//   .then(() => app.listen(PORT))
//   .catch((error) => {
//     console.log(error.message);
//     process.exit(1);
//   });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// const { error } = require("console");
// const fs = require("fs/promises");

// const filePath = "README.md";
// const filePath = "src/furniture/furniture.json";
const furnitureOperations = require("../src/furniture");

// fs.readFile("README.md", "utf-8", (error, data) => {
//   if (error) {
//     throw error;
//   }
//   console.log(data);
// });

// (async () => {
//   try {
//     const data = await fs.readFile(filePath, "utf-8");
//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// })();

(async () => {
  try {
    // const furnitureList = await furnitureOperations.getAll();
    // console.log(furnitureList);
    //
    // const furnitureItem = await furnitureOperations.getById((id = "2"));
    // console.log(furnitureItem);
    //
    // const newData = {
    //   name: "Шафа під мікрохвильовку",
    //   a: 600,
    //   b: 520,
    //   c: 2000,
    //   price: 1700,
    // };
    // const newItem = await furnitureOperations.add(newData);
    // console.log(newItem);
    //
    // const updateData = { ...furnitureItem, price: 777 };
    // const updateItem = await furnitureOperations.updateById(id, updateData);
    // console.log(updateItem);
    //
    const removeItem = await furnitureOperations.removeById(
      (id = "2686d7e6-0283-47a7-8ce5-cc6bddc452c1")
    );
    console.log(removeItem);
    //
  } catch (error) {
    console.log(error.message);
  }
})();
