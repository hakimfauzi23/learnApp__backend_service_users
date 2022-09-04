const { User, RefreshToken } = require("../../../models");

module.exports = async (req, res) => {
  const userId = req.body.user_id;
  const user = await User.findByPk(userId);
  const refreshToken = await RefreshToken.findOne({
    where: {
      user_id: userId,
    },
  });

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "user not found",
    });
  }

  if (!refreshToken) {
    return res.status(404).json({
      status: "error",
      message: `token with user id ${userId} not found`,
    });
  }

  await RefreshToken.destroy({
    where: { user_id: userId },
  });

  return res.json({
    status: "success",
    message: "refresh token deleted",
  });
};
