const express = require("express");
const Joi = require("joi");

const furnitureOperations = require("../../model/furniture");

const joiFurnitureSchema = Joi.object({
  name: Joi.string().min(1).required(),
  a: Joi.number().min(100).required(),
  b: Joi.number().min(100).required(),
  c: Joi.number().min(100).required(),
  price: Joi.number().min(0.01).required(),
});

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const furniture = await furnitureOperations.getAll();
    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        result: furniture,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const furnitureItem = await furnitureOperations.getById(id);

    if (!furnitureItem) {
      const error = new Error(`Furniture item with id=${id} not found`);
      error.status = 404;
      throw error;
    }

    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        result: furnitureItem,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = joiFurnitureSchema.validate(req.body);
    if (error) {
      const err = new Error(error.message);
      err.status = 400;
      throw err;
    }
    const result = await furnitureOperations.add(req.body);
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
    const { error } = joiFurnitureSchema.validate(req.body);
    if (error) {
      const err = new Error(error.message);
      err.status = 400;
      throw err;
    }
    const { id } = req.params;
    const result = await furnitureOperations.updateById(id, req.body);
    if (!result) {
      const error = new Error(`Furniture item with id=${id} not found`);
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
    const result = await furnitureOperations.removeById(id);
    if (!result) {
      const error = new Error(`Furniture item with id=${id} not found`);
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
