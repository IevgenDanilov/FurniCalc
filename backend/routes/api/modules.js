const express = require("express");

const { modules: ctrl } = require("../../controllers");
const { controllerWrapper, validation } = require("../../middlewares");
const { joiModuleSchema } = require("../../models/module");

const router = express.Router();

// router.get("/", controllerWrapper(ctrl.getAll));

// router.get("/:id", controllerWrapper(ctrl.getById));

router.post("/", validation(joiModuleSchema), controllerWrapper(ctrl.add));

// router.post("/", controllerWrapper(ctrl.add));

// router.put(
//   "/:id",
//   validation(joiModulesSchema),
//   controllerWrapper(ctrl.updateById)
// );

// router.delete("/:id", controllerWrapper(ctrl.removeById));

module.exports = router;
