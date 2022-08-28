const express = require("express");

const { auth: ctrl } = require("../../controllers");
const { controllerWrapper, validation } = require("../../middlewares");
const { joiSchema } = require("../../models/user");

const router = express.Router();

// router.get("/", controllerWrapper(ctrl.getAll));

// router.get("/:id", controllerWrapper(ctrl.getById));

// router.post("/", validation(joiSchema), controllerWrapper(ctrl.add));

router.post(
  "/register",
  validation(joiSchema),
  controllerWrapper(ctrl.register)
);

// router.post("/login", validation(joiSchema), controllerWrapper(ctrl.login));
// router.get("/logout", controllerWrapper(ctrl.logout));

// router.put(
//   "/:id",
//   validation(joiSchema),
//   controllerWrapper(ctrl.updateById)
// );

// router.patch("/:id", controllerWrapper(ctrl.setDetaling));

// router.delete("/:id", controllerWrapper(ctrl.removeById));

module.exports = router;
