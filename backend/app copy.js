const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const contactsRouter = require("routes/api/contacts");

const app = express();

// const furniture = require("./furniture/furniture.json");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
// app.use(express.json());

app.use((req, res, next) => {
  console.log("1 mdlwr");
  next();
});

app.use("/api/contacts", contactsRouter);

// app.get("/contacts", (req, res) => {
//   res.send("contacts");
//   res.json(contacts);
// });

// app.get("/furniture", (req, res) => {
//   res.json(furniture);
// });

// app.post("/furniture", (req, res) => {
//   res.send({ status: "success" });
// });

app.use((_, res) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "Not found",
  });
});

// app.use((err, req, res, next) => {
//   res.status(500).json({
//     status: "error",
//     code: 500,
//     message: err.message,
//   });
// });

module.exports = app;
