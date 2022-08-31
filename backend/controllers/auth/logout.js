const { User } = require("../../models");
const { sendResponse } = require("../../helpers");

const logout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: null });
  sendResponse({
    res,
    status: 204,
  });
};

module.exports = logout;
