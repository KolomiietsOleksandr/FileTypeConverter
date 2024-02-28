const User = require('../../models/userModel');

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Wrong email or password. Try again...' });
    }

    req.session.userId = user._id;

    res.redirect("/converter");
  } catch (error) {
    console.error(error.message);
    res.redirect("/errors");
  }
};
