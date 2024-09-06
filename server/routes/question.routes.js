const questionRouter = require('express').Router();
const QuestionService = require('../services/Question.services');

questionRouter.get('/', async (req, res) => {
  try {
    const questions = await QuestionService.getAllQuestion();
    res.status(200).json({ message: 'success', questions });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

questionRouter.get('/:theme_id', async (req, res) => {
  try {
    const { theme_id } = req.params;
    const questions = await QuestionService.getQuestionsByThemeId(theme_id);
    res.status(200).json({ message: 'success', questions });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

// questionRouter.get('/:theme_id/:id', async (req, res) => {
//   try {
//     const { theme_id, id } = req.params;
//     const questions = await QuestionService.getAllQuestion({
//       where: { theme_id, id },
//     });
//     res.status(200).json({ message: 'success', questions });
//   } catch ({ message }) {
//     res.status(500).json({ error: message });
//   }
// });

// questionRouter.get('');

module.exports = questionRouter;
