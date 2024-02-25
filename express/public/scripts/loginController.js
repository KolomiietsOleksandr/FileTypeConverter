const User = require('../../models/userModel');

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    req.session.userId = user._id;

    res.redirect("/converter");
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};
