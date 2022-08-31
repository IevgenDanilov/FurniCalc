const { Project } = require("../../models");
const { sendSuccessReq } = require("../../helpers");

const add = async (req, res) => {
  const newProject = { ...req.body, owner: req.user._id };
  const result = await Project.create(newProject);
  sendSuccessReq(res, { result }, 201);
};

module.exports = add;
