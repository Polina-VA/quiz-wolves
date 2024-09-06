const { Question } = require('../db/models');

class QuestionService {
  static getAllQuestion = async (id) =>
    (await Question.findAll({ where: { theme_id: id } })).map((question) => question.get());
}

module.exports = QuestionService;
