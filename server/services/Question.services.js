const { where } = require('sequelize');
const { Question } = require('../db/models');

class QuestionService {
  static getAllQuestion = async () =>
    (await Question.findAll()).map((question) => question.get());

  static getQuestionId = async (id) => {
    const question = await Question.findByPk(id);
    return question;
  };

  static getQuestionsByThemeId = async (theme_id) => {
    const questions = await Question.findAll({ where: { theme_id } });
    return questions.map((question) => question.get());
  };
  
  // static getFirstQuestionId = async (theme_id) => {
  //   const allQuestion = await Question.findALl({ where: { theme_id } });
  //   const firstQuestion = await allQuestion[0];
  //   return firstQuestion;
  // };
}

module.exports = QuestionService;
