const ProfileModel = require("../models/profile.model");

const display = async (req, res, next) => {
  const data = await ProfileModel.find();
  res.json({ data });
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const { username, email, tel, password } = req.body;

  const data = await ProfileModelfindByIdAndUpdate(
    {
      id,
      $set: {
        username,
        email,
        tel,
        password,
      },
    },
    { new: true }
  );
  res.json({
    message: "Profile updated successfully",
    data: data,
  });
};

module.exports = {
  display,
  update,
};
