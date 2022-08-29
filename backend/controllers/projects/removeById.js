const { NotFound } = require("http-errors");
const { Project } = require("../../models");
const { sendSuccessReq } = require("../../helpers");

const removeById = async (req, res) => {
  const { id } = req.params;
  const result = await Project.findByIdAndDelete(id);
  if (!result) {
    throw new NotFound(`Project with id=${id} not found`);
  }
  sendSuccessReq(res, { result });
};

module.exports = removeById;
