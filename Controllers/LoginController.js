const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "please make sure email and password are not empty." });
  }

  const userPassword = await bcrypt.hash(process.env.USER_PASSWORD, 10);
  console.log(userPassword);
  const userEmail = process.env.USER_EMAIL;

  if (email === userEmail) {
    const match = await bcrypt.compare(password, userPassword);
    if (match) {
      const token = jwt.sign({ email }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      return res.status(200).json({ message: "Login Successful", token });
    }
  } else {
    return res.status(400).json({ message: "Please check your credentials!" });
  }
};

module.exports = {
  userLogin,
};
