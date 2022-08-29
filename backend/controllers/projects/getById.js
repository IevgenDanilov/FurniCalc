const { NotFound } = require("http-errors");
const { Project } = require("../../models");
const { sendSuccessReq } = require("../../helpers");

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Project.findById(id);
  if (!result) {
    throw new NotFound(`Project with id=${id} not found`);
  }
  sendSuccessReq(res, { result });
};

module.exports = getById;
