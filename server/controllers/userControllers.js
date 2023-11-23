const User = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports.signin = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const usernameCheck = await User.findOne({ username });
    if (usernameCheck)
      return res.json({ message: "Username already in use", status: false });
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ message: "Email already in use", status: false });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    delete user.password;
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};
