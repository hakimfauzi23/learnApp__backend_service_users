const { User } = require("../../../models");

module.exports = async (req, res) => {
  const userIds = req.query.user_ids || [];
  const userRole = req.query.role || "";

  const sqlOptions = {
    attributes: ["id", "name", "email", "role", "profession", "avatar"],
  };

  if (userIds.length) {
    sqlOptions.where = {
      id: userIds,
    };
  }
  
  if (userRole.length) {
    sqlOptions.where = {
      role: userRole,
    };
  }

  const users = await User.findAll(sqlOptions);

  return res.json({
    status: "success",
    data: users,
  });
};
