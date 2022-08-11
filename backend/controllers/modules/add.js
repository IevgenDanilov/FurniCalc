const Joi = require("joi");
const { BadRequest } = require("http-errors");

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

const add = async (req, res, next) => {
  const { error } = joiModulesSchema.validate(req.body);
  if (error) {
    throw new BadRequest(error.message);
  }
  const result = await modulesOperations.add(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = add;
