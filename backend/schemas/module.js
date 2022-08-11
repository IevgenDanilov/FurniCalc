const Joi = require("joi");

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

module.exports = joiModulesSchema;
