const express = require("express");
const app = express();
const cors = require("cors");

const furniture = require("../src/furniture/furniture.json");

const { DB_HOST, PORT = 4000 } = process.env;

// mongoose
//   .connect(DB_HOST)
//   .then(() => app.listen(PORT))
//   .catch((error) => {
//     console.log(error.message);
//     process.exit(1);
//   });

app.use(cors());

app.use((req, res, next) => {
  console.log("1 mdlwr");
  next();
});

app.get("/contacts", (req, res) => {
  res.send("contacts");
  //   res.json(contacts);
});

app.get("/furniture", (req, res) => {
  res.json(furniture);
});

app.post("/furniture", (req, res) => {
  res.send({ status: "success" });
});

app.use((_, res) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "Not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
