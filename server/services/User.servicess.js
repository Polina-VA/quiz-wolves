const { User } = require('../db/models');

class UserServices {
  static getAllUsers = async () =>
    (await User.findAll()).map((user) => user.get());

  static getUserId = async (id) => {
    const user = await User.findByPk(id);
    return user;
  };
}

module.exports = UserServices;
