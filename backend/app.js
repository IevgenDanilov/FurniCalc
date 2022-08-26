const express = require("express");
// const logger = require("morgan");
const cors = require("cors");

const { sendSuccessReq } = require("./helpers");
const modulesRouter = require("./routes/api/modules");
// const authRouter = require("./routes/api/auth");

const app = express();

// const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/v1/modules", modulesRouter);
// app.use("/api/v1/auth", authRouter);

app.use((_, res) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "Not found",
  });
});

app.use((err, _, res, __) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({
    status: "error",
    code: status,
    message,
  });
});

// app.use((_, res) => {
//   sendSuccessReq({
//     res,
//     status: 404,
//     statusMessage: "error",
//     data: { message: "Not found" },
//   });
// });

// app.use((err, _, res, __) => {
//   const { status = 500, message = "Server error" } = err;
//   sendSuccessReq({
//     res,
//     status,
//     statusMessage: "error",
//     data: { message: "Not found" },
//   });
// });

module.exports = app;
