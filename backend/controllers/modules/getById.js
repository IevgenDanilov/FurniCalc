const { NotFound } = require("http-errors");
const { Module } = require("../../models");
const { sendSuccessReq } = require("../../helpers");

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Module.findById(id);
  if (!result) {
    throw new NotFound(`Module with id=${id} not found`);
  }
  sendSuccessReq(res, { result });
};

module.exports = getById;
