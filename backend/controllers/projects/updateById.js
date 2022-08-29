const { NotFound } = require("http-errors");
const { Project } = require("../../models");
const { sendSuccessReq } = require("../../helpers");

const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await Project.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw new NotFound(`Project with id=${id} not found`);
  }
  sendSuccessReq(res, { result });
};

module.exports = updateById;
