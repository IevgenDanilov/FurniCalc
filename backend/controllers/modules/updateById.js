const { NotFound } = require("http-errors");
const { Module } = require("../../models");
const { sendSuccessReq } = require("../../helpers");

const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await Module.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw new NotFound(`Module with id=${id} not found`);
  }
  sendSuccessReq(res, { result });
};

module.exports = updateById;
