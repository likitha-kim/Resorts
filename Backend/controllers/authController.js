import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "Email already exists" });

    const salt = bcrypt.genSaltSync(10);
    const hashedPwd = bcrypt.hashSync(password, salt);

    const user = await User.create({ username, email, password: hashedPwd });

    res.status(201).json({ message: "User Registered Successfully", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    const user =
      (await User.findOne({ email: identifier })) ||
      (await User.findOne({ username: identifier }));

    if (!user) return res.status(400).json({ message: "User not found" });

    const isValid = bcrypt.compareSync(password, user.password);
    if (!isValid)
      return res.status(400).json({ message: "Wrong password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({ message: "Login Success ✅", token, user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
