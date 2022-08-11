const express = require("express");
const Joi = require("joi");

const modulesOperations = require("../../model/modules");

const joiModulesSchema = Joi.object({
  projectName: Joi.string().min(1).required(),
  category: Joi.string()
    .valid("bottom modules", "top modules", "cupboards")
    .required(),
  mName: Joi.string().min(1).required(),
  mWidth: Joi.number().min(100).required(),
  mDepth: Joi.number().min(100).required(),
  mHeight: Joi.number().min(100).required(),
  mPrice: Joi.number().min(0.01).required(),
  mQuantity: Joi.number().min(0).required(),
  detaling: Joi.array().items(
    Joi.object({
      // joiModuleSchema
    })
  ),
});

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const modules = await modulesOperations.getAll();
    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        result: modules,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const module = await modulesOperations.getById(id);

    if (!module) {
      const error = new Error(`Module with id=${id} not found`);
      error.status = 404;
      throw error;
    }

    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        result: module,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = joiModulesSchema.validate(req.body);
    if (error) {
      const err = new Error(error.message);
      err.status = 400;
      throw err;
    }
    const result = await modulesOperations.add(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { error } = joiModulesSchema.validate(req.body);
    if (error) {
      const err = new Error(error.message);
      err.status = 400;
      throw err;
    }
    const { id } = req.params;
    const result = await modulesOperations.updateById(id, req.body);
    if (!result) {
      const error = new Error(`Module with id=${id} not found`);
      error.status = 404;
      throw error;
    }
    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await modulesOperations.removeById(id);
    if (!result) {
      const error = new Error(`Module with id=${id} not found`);
      error.status = 404;
      throw error;
    }
    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
