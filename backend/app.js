const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const furnitureRouter = require("./routes/api/furniture");

const app = express();

// const furniture = require("./furniture/furniture.json");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/furniture", furnitureRouter);

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

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
