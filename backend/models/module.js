const Joi = require("joi");
const { Schema, model } = require("mongoose");

const moduleSchema = Schema({
  projectName: {
    type: String,
    required: [true, "Вкажіть назву проекту"],
    minlength: 2,
  },
  category: {
    type: String,
    required: [
      true,
      "Вкажіть категорію з переліку: Нижні модулі, Верхні модулі, Шафи",
    ],
    enum: ["Нижні модулі", "Верхні модулі", "Шафи"],
    // enum: ["bottom modules", "top modules", "cupboards"],
  },
  mName: {
    type: String,
    required: [true, "Вкажіть назву меблевого модулю"],
    minlength: 2,
  },
  mWidth: {
    type: Number,
    required: [true, "Вкажіть ширину модулю"],
    min: 100,
  },
  mDepth: {
    type: Number,
    required: [true, "Вкажіть глибину модулю"],
    min: 100,
  },
  mHeight: {
    type: Number,
    required: [true, "Вкажіть висоту модулю"],
    min: 100,
  },
  mQuantity: {
    type: Number,
    // required: [true, "Вкажіть кількість таких модулів"],
    min: 0,
    default: 1,
  },
  detaling: {
    type: Array,
    default: [],
  },
});

const joiModuleSchema = Joi.object({
  projectName: Joi.string().min(2).required(),
  category: Joi.string()
    .valid("Нижні модулі", "Верхні модулі", "Шафи")
    .required(),
  mName: Joi.string().min(2).required(),
  mWidth: Joi.number().min(100).required(),
  mDepth: Joi.number().min(100).required(),
  mHeight: Joi.number().min(100).required(),
  mQuantity: Joi.number().min(0),
  detaling: Joi.array().items(
    Joi.object({
      // joiDetailSchema
    })
  ),
});

const Module = model("module", moduleSchema);

module.exports = {
  Module,
  joiModuleSchema,
};
