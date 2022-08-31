const { Project } = require("../../models");
const { sendSuccessReq } = require("../../helpers");

const getAll = async (req, res) => {
  const { page = 1, limit = 2 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Project.find({ owner: req.user._id }, "name", {
    skip,
    limit: +limit,
  }).populate("owner", "_id name email");
  sendSuccessReq(res, { result });
};

module.exports = getAll;
