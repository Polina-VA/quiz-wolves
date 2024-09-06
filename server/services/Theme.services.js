const { Theme } = require('../db/models');

class ThemeService {
  static getAllTHeme = async () =>
    (await Theme.findAll()).map((theme) => theme.get());
}

module.exports = ThemeService;
