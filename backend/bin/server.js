const { string, number } = require("joi");
const mongoose = require("mongoose");
require("dotenv").config();

const app = require("../app");

const { DB_HOST, PORT = 4000 } = process.env;

const { Schema, model } = mongoose;

const moduleSchema = Schema({
  name: String,
  length: Number,
});

const Module = model("module", moduleSchema);

const newModule = {
  name: "example",
  length: 100,
};

mongoose
  .connect(DB_HOST)
  .then(
    () => {
      Module.create(newModule, (error, data) => {
        console.log("error", error);
        console.log("data", data);
      });
    }
    // app.listen(PORT, () => {
    //   console.log(`Server running on port ${PORT}`);
    // })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
