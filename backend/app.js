const express = require("express");
// const logger = require("morgan");
const cors = require("cors");

// const { sendSuccessReq } = require("./helpers");
const { sendResponse } = require("./helpers");
const authRouter = require("./routes/api/auth");
const projectsRouter = require("./routes/api/projects");
const modulesRouter = require("./routes/api/modules");

const app = express();

// const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/modules", modulesRouter);
app.use("/api/v1/projects", projectsRouter);

app.use((_, res) => {
  sendResponse({
    res,
    status: 404,
    statusMessage: "error",
    data: { message: "Not found" },
  });
});

app.use((error, _, res, __) => {
  const { status = 500, message = "Server error" } = error;
  sendResponse({
    res,
    status,
    statusMessage: "error",
    data: { message: "Not found" },
  });
});

module.exports = app;
