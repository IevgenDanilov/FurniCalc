const { NotFound } = require("http-errors");
const { Module } = require("../../models");
const { sendSuccessReq } = require("../../helpers");

const removeById = async (req, res) => {
  const { id } = req.params;
  const result = await Module.findByIdAndDelete(id);
  if (!result) {
    throw new NotFound(`Module with id=${id} not found`);
  }
  sendSuccessReq(res, { result });
};

module.exports = removeById;
