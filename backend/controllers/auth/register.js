const { User } = require("../../models");
const { sendResponse } = require("../../helpers");

const register = async (req, res) => {
  const { email, password } = req.body;
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

  const newUser = new User(req.body);
  newUser.setPassword(password);
  await newUser.save();

  sendResponse({
    res,
    status: 201,
    data: { message: "Success register" },
  });
};

module.exports = register;
