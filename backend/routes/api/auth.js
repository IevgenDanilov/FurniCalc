const express = require("express");

const { auth: ctrl } = require("../../controllers");
const { controllerWrapper, validation } = require("../../middlewares");
const { joiSchema } = require("../../models/user");

const router = express.Router();

router.post(
  "/register",
  validation(joiSchema),
  controllerWrapper(ctrl.register)
);

router.post("/login", validation(joiSchema), controllerWrapper(ctrl.login));
// router.get("/logout", controllerWrapper(ctrl.logout));

module.exports = router;
