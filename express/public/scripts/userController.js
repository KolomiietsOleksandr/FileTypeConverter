const User = require('../../models/userModel.js');
const redis = require('ioredis');
const client = redis.createClient();

exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.session.userId;

    client.get(`user:${userId}`, async (error, cachedData) => {
      if (error) throw error;

      if (cachedData) {
        console.log("cachedData found successfully");
        const user = JSON.parse(cachedData);
        res.render('userProfile', { user });
      } else {
        const user = await User.findById(userId);

        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }

        client.setex(`user:${userId}`, 3600, JSON.stringify(user));

        res.render('userProfile', { user });
      }
    });
  } catch (error) {
    console.error(error.message);
    res.redirect("/errors");
  }
};

exports.changePassword = async (req, res) => {
  const userId = req.session.userId;
  const newPassword = req.body.newPassword;

  try {
    await User.findByIdAndUpdate(userId, { password: newPassword });

    const updatedUser = await User.findById(userId);
    client.setex(`user:${userId}`, 3600, JSON.stringify(updatedUser));

    res.status(200).json({ message: 'Password successfully updated' });
  } catch (error) {
    console.error(error.message);
    res.redirect("/errors");
  }
};

exports.changeEmail = async (req, res) => {
  const userId = req.session.userId;
  const newEmail = req.body.newEmail;

  try {
    await User.findByIdAndUpdate(userId, { email: newEmail });

    const updatedUser = await User.findById(userId);
    client.setex(`user:${userId}`, 3600, JSON.stringify(updatedUser));

    res.status(200).json({ message: 'Email successfully updated' });
  } catch (error) {
    console.error(error.message);
    res.redirect("/errors");
  }
};

exports.deleteUser = async (req, res) => {
  const userId = req.session.userId;

  try {
    await User.findByIdAndDelete(userId);

    req.session.destroy();

    client.del(`user:${userId}`);

    res.status(200).json({ message: 'User successfully deleted' });
  } catch (error) {
    console.error(error.message);
    res.redirect("/errors");
  }
};
