
const { Question } = require('../db/models');

class QuestionService {
  static getAllQuestion = async () =>
    (await Question.findAll()).map((question) => question.get());

  static getQuestionId = async (id) => {
    const question = await Question.findOne({ where: { id } });
    return question;
  };
}

module.exports = QuestionService;
