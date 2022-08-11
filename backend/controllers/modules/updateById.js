const Joi = require("joi");
const { BadRequest, NotFound } = require("http-errors");

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

const updateById = async (req, res, next) => {
  try {
    const { error } = joiModulesSchema.validate(req.body);
    if (error) {
      throw new BadRequest(error.message);
    }
    const { id } = req.params;
    const result = await modulesOperations.updateById(id, req.body);
    if (!result) {
      throw new NotFound(`Module with id=${id} not found`);
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
};

module.exports = updateById;
