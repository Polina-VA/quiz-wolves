const questionRouter = require('express').Router();
const QuestionService = require('../services/Question.services');

questionRouter.get('/', async (req, res) => {
  try {
    const { id } = req.params;
    const questions = await QuestionService.getAllQuestion();
    res.status(200).json({ message: 'success', questions });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = questionRouter;
