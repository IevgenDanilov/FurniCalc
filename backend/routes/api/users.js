const express = require("express");

const { users: ctrl } = require("../../controllers");
const { controllerWrapper, validation } = require("../../middlewares");
// const { joiUserSchema } = require("../../models/user");

const router = express.Router();

router.get("/", controllerWrapper(ctrl.getAll));

// router.get("/:id", controllerWrapper(ctrl.getById));

// router.post("/", validation(joiUserSchema), controllerWrapper(ctrl.add));

// router.post("/register", controllerWrapper(ctrl.register));
// router.post("/login", controllerWrapper(ctrl.login));
// router.get("/logout", controllerWrapper(ctrl.logout));

// router.put(
//   "/:id",
//   validation(joiUserSchema),
//   controllerWrapper(ctrl.updateById)
// );

// router.patch("/:id", controllerWrapper(ctrl.setDetaling));

router.delete("/:id", controllerWrapper(ctrl.removeById));

module.exports = router;
