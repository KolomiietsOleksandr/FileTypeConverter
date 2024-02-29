const User = require('../../models/userModel');
const { v4: uuidv4 } = require('uuid');

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return res.status(401).json({ error: 'User with this email already exists.' });
    }

    const newUser = new User({
      userId: uuidv4(),
      name,
      email,
      password
    });

    await newUser.save();

    res.redirect("/login");
  } catch (error) {
    console.error(error.message);
    res.redirect("/errors");
  }
};
