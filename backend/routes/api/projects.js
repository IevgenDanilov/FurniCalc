const express = require("express");

const { projects: ctrl } = require("../../controllers");
const {
  controllerWrapper,
  validation,
  authenticate,
} = require("../../middlewares");
const { joiProjectSchema } = require("../../models/project");

const router = express.Router();

router.get("/", authenticate, controllerWrapper(ctrl.getAll));

// router.get("/:id", controllerWrapper(ctrl.getById));

router.post(
  "/",
  authenticate,
  validation(joiProjectSchema),
  controllerWrapper(ctrl.add)
);

// router.put(
//   "/:id",
//   validation(joiProjectSchema),
//   controllerWrapper(ctrl.updateById)
// );

// router.delete("/:id", controllerWrapper(ctrl.removeById));

module.exports = router;
