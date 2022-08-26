const { Module } = require("../../models");
const { sendSuccessReq } = require("../../helpers");

const getAll = async (req, res) => {
  const result = await Module.find(
    {},
    "projectName category mName mWidth mDepth mHeight mQuantity detaling"
  );
  sendSuccessReq(res, { result });
};

module.exports = getAll;
