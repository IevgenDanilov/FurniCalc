const Joi = require("joi");
const { Schema, model } = require("mongoose");

const projectSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Вкажіть назву проекту"],
      minlength: 2,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiProjectSchema = Joi.object({
  name: Joi.string().min(2).required(),
  // owner: Joi.string(),
});

const Project = model("project", projectSchema);

module.exports = {
  Project,
  joiProjectSchema,
};
