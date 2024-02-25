const User = require('../../models/userModel.js');

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

exports.changePassword = async (req, res) => {
  const userId = req.session.userId;
  const newPassword = req.body.newPassword;

  try {
      await User.findByIdAndUpdate(userId, { password: newPassword });

  } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Server Error' });
  }
};

exports.changeEmail = async (req, res) => {
  const userId = req.session.userId;
  const newEmail = req.body.newEmail;

  try {
      await User.findByIdAndUpdate(userId, { email: newEmail });

  } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Server Error' });
  }
}