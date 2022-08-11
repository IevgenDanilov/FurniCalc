const express = require("express");

const { modules: ctrl } = require("../../controllers");
const { controllerWrapper, validation } = require("../../middlewares");
const { joiModulesSchema } = require("../../schemas");

const router = express.Router();

router.get("/", controllerWrapper(ctrl.getAll));

router.get("/:id", controllerWrapper(ctrl.getById));

router.post("/", validation(joiModulesSchema), controllerWrapper(ctrl.add));

router.put(
  "/:id",
  validation(joiModulesSchema),
  controllerWrapper(ctrl.updateById)
);

router.delete("/:id", controllerWrapper(ctrl.removeById));

module.exports = router;
