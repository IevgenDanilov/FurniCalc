const { Module } = require("../../models");
const { sendSuccessReq } = require("../../helpers");

const getAll = async (req, res) => {
  const result = await Module.find({});
  sendSuccessReq(res, { result });
};

module.exports = getAll;
