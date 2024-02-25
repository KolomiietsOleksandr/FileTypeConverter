const User = require('../../models/userModel');

exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.session.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.render('userProfile', { user });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};