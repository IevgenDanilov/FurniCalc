const { NotFound } = require("http-errors");
const { Module } = require("../../models");
const { sendSuccessReq } = require("../../helpers");

const setDetaling = async (req, res) => {
  const { id } = req.params;
  const { detaling } = req.body;
  const result = await Module.findByIdAndUpdate(
    id,
    { detaling },
    { new: true }
  );
  if (!result) {
    throw new NotFound(`Module with id=${id} not found`);
  }
  sendSuccessReq(res, { result });
};

module.exports = setDetaling;
