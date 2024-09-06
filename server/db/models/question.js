'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({Theme}) {
      this.belongsTo(Theme, {foreignKey: 'theme_id'})
    }
  }
  Question.init(
    {
      theme_id: DataTypes.INTEGER,
      question: DataTypes.TEXT,
      answer: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Question',
    }
  );
  return Question;
};
