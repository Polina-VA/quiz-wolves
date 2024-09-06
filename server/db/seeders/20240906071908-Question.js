'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          theme_id: 3,
          question: 'Как тебя зовут?',
          answer: 'Егор',
        },
        {
          theme_id: 4,
          question: 'Где ты?',
          answer: 'В кампусе',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
