const { User } = require("../../models");
const { sendResponse } = require("../../helpers");

const register = async (req, res) => {
  const { email } = req.body;
  const result = await User.findOne({ email });
  if (result) {
    sendResponse({
      res,
      status: 409,
      statusMessage: "error",
      data: { message: "Already register" },
    });
    return;
  }

  await User.create(req.body);

  sendResponse({
    res,
    status: 201,
    data: { message: "Success register" },
  });
};

module.exports = register;
