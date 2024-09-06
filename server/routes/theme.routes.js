const themeRouter = require('express').Router();
const ThemeService = require('../services/Theme.services');

themeRouter.get('/', async (req, res) => {
  try {
    const themes = await ThemeService.getAllTHeme();
    res.status(200).json({ message: 'success', themes });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});



module.exports = themeRouter;
