const jwt = require("jsonwebtoken");
const { User } = require("../../models");
const { sendResponse } = require("../../helpers");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    sendResponse({
      res,
      status: 401,
      statusMessage: "error",
      data: { message: "Email is wrong" },
    });
    return;
  }

  if (!user.comparePassword(password)) {
    sendResponse({
      res,
      status: 401,
      statusMessage: "error",
      data: { message: "Password is wrong" },
    });
    return;
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  await User.findByIdAndUpdate(user._id, { token });

  sendResponse({
    res,
    status: 200,
    data: { token },
  });
};

module.exports = login;
