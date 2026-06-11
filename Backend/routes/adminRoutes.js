const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (
    email === "admin@gmail.com" &&
    password === "123456"
  ) {
    const token = jwt.sign(
      { role: "admin" },
      process.env.JWT_SECRET
    );

    return res.json({
      token,
      message: "Login Successful",
    });
  }

  return res.status(401).json({
    message: "Invalid Credentials",
  });
});

module.exports = router;