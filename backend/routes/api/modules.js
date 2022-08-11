const express = require("express");

const { modules: ctrl } = require("../../controllers");
const { controllerWrapper } = require("../../middlewares");

const router = express.Router();

router.get("/", controllerWrapper(ctrl.getAll));

router.get("/:id", controllerWrapper(ctrl.getById));

router.post("/", controllerWrapper(ctrl.add));

router.put("/:id", controllerWrapper(ctrl.updateById));

router.delete("/:id", controllerWrapper(ctrl.removeById));

module.exports = router;
