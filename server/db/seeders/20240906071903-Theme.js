'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Themes',
      [
        {
          title: 'Угадать фильм по эмодзи',
          image:
            'https://n1s1.hsmedia.ru/8d/90/1d/8d901da01e0c0861767757ff794d5a82/656x438_1_8d0940e3de6fd63bd76f9ff24eb8ae28@1500x1000_0xIqb7bn0C_1740236657121709644.jpg.webp',
        },
        {
          title: 'Лучшие вопросы этого дня',
          image: 'https://a.d-cd.net/Kcf4DLxMvJDsNai5I5k0Zbf_f0Y-1920.jpg',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
