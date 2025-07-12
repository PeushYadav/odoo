const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'mySuperSecretKey';

exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
     const { username, password } = req.body;

    const newUser = new User({ username, password });
    await newUser.save();

    console.log("✅ User registered:", newUser);
    res.status(201).json({ message: "Registered!", user: newUser });
  } catch (err) {
    console.error("❌ Registration failed:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.protectedRoute = (req, res) => {
  res.json({ message: `Welcome User ${req.user.id}` });
};
