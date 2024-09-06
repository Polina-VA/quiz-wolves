'use strict';

const theme = require('../models/theme');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          theme_id: 1,
          question: 'Что за фильм?',
          answer: '12 стульев',
          image:
            'https://n1s1.hsmedia.ru/91/e1/ce/91e1ce987390820e4bbca8814c0afd6e/1456x819_1_bacb109f913606599461009ce4395313@1500x843_0x0tupuelh_8440670700164058376.jpg.webp',
        },
        {
          theme_id: 1,
          question: 'Что за фильм?',
          answer: 'Леон',
          image:
            'https://n1s1.hsmedia.ru/92/80/21/92802141e9fc8d216786c2201e9c9539/1456x819_1_a44ed3270ef3636d5f6bb1cc9cb22553@1500x843_0xXeTYQR48_3135349500349092508.jpg.webp',
        },
        {
          theme_id: 1,
          question: 'Что за фильм?',
          answer: 'Четыре свадьбы и одни похороны',
          image:
            'https://n1s1.hsmedia.ru/42/10/95/4210956267da6de70331ee0512851d1d/1456x818_1_d1e4eaea1c230ac6dcd06f5e29f3ddf7@1501x843_0x0sjYhUJA_1495813744358364848.jpg.webp',
        },
        {
          theme_id: 1,
          question: 'Что за фильм?',
          answer: 'Криминальное чтиво',
          image:
            'https://n1s1.hsmedia.ru/32/ab/9b/32ab9b9bb1c2819596067f7265551460/1456x819_1_87c0092bca514e596d433443e7b6a906@1500x843_0x0kKHYy0W_9451337790876243040.jpg.webp',
        },
        {
          theme_id: 1,
          question: 'Что за фильм?',
          answer: 'Титаник',
          image:
            'https://n1s1.hsmedia.ru/3c/d7/4a/3cd74a16a07e4b933d92ba7f38cf6bcd/1456x818_1_6f87a927f2329a9aa7ded6e6dc3d7e75@1501x843_0xZb6N5tRU_6672890249706568679.jpg.webp',
        },
        {
          theme_id: 1,
          question: 'Что за фильм?',
          answer: 'Загадочная история Бенджамина Баттона',
          image:
            'https://n1s1.hsmedia.ru/fd/b9/a4/fdb9a4fca8d5c8d7af49808526989d77/1456x819_1_6c29ea5141c58afd1d560b23bda722ca@1500x843_0xq7xSkmwW_1649696460001689755.jpg.webp',
        },
        {
          theme_id: 1,
          question: 'Что за фильм?',
          answer: 'Жизнь Пи',
          image:
            'https://n1s1.hsmedia.ru/85/f5/f5/85f5f58b95efbb26c6cab61619020618/1456x819_1_28aba5e4277e07cd669965cf6cfc9185@1500x843_0x4c2jzLXi_4034335678065103005.jpg.webp',
        },
        {
          theme_id: 1,
          question: 'Что за фильм?',
          answer: 'Сияние',
          image:
            'https://n1s1.hsmedia.ru/05/4a/fa/054afa8a4543fa86719510c8f27aae75/1456x819_1_8cb94cd7e63a37adc615349be5375e2a@1500x843_0xv1SUWg5C_8584823827195448855.jpg.webp',
        },
        {
          theme_id: 1,
          question: 'Что за фильм?',
          answer: 'Крепкий орешек',
          image:
            'https://n1s1.hsmedia.ru/11/05/39/1105393571efe25f0e153510a463d187/1456x818_1_b43d1cbf46646346d408cf5b781d4fac@1501x843_0xhxe35COf_8976230032038451080.jpg.webp',
        },
        {
          theme_id: 1,
          question: 'Что за фильм?',
          answer: 'Майкл',
          image:
            'https://n1s1.hsmedia.ru/55/18/4d/55184d83831290b9e30f161c07b0f94c/1456x818_1_9e142719bcb5b25e133a49c1e2e63699@1501x843_0xYr6x1JS8_2827769511801304953.jpg.webp',
        },
        {
          theme_id: 2,
          question: 'С когтями, а не птица, летит и матерится',
          answer: 'Электромонтер',
          image:
            'https://avatars.mds.yandex.net/i?id=a207aeb30ec4983e10869684a3213bb1ce589d9d-4546260-images-thumbs&n=13',
        },
        {
          theme_id: 2,
          question: 'Мальчик с девочкой в траве что-то делали на "Е"',
          answer: 'Ели землянику',
          image:
            'https://avatars.mds.yandex.net/i?id=c5c7f96846fde669cc0c81d607c60faf2c6aa72e-3589653-images-thumbs&n=13',
        },
        {
          theme_id: 2,
          question: 'Как переводится с французского языка слово «фуршет»?',
          answer: 'Вилка',
          image:
            'https://avatars.mds.yandex.net/i?id=133fa15672596cab8e5fb906efa02da1a01675d2-12523300-images-thumbs&n=13',
        },
        {
          theme_id: 2,
          question: 'Около 40 млн. человек занимаются ЭТИМ по ночам',
          answer: 'internet',
          image:
            'https://avatars.mds.yandex.net/i?id=b57746ef1986c32693732095dda966c7f58bc54c-5870396-images-thumbs&n=13',
        },
        {
          theme_id: 2,
          question: 'Встанет, до небу достанет',
          answer: 'Радуга',
          image:
            'https://avatars.mds.yandex.net/i?id=0ff56b352f6365ce6a3a523277a56680b98fdd83-12421006-images-thumbs&n=13',
        },
        {
          theme_id: 2,
          question: 'На языке строителей скажите «вниз»',
          answer: 'Майна',
          image:
            'https://avatars.mds.yandex.net/i?id=26d9992d5771423cc0cae39d047630db4ba16221-10266040-images-thumbs&n=13',
        },
        {
          theme_id: 2,
          question: 'Что такое синее золото?',
          answer: 'Любимая жена напилась',
          image:
            'https://avatars.mds.yandex.net/i?id=edbe8673c205ebbf0115f5425f2cc5cb_sr-5344771-images-thumbs&n=13',
        },
        {
          theme_id: 2,
          question: 'Что такое: самое доброе в мире привидение с моторчиком?',
          answer: 'Запорожец',
          image:
            'https://avatars.mds.yandex.net/i?id=621e13a380a44f48fc8eafa3d53456baf0462440-4568663-images-thumbs&n=13',
        },
        {
          theme_id: 2,
          question:
            'У какой социальной группы критические дни два раза в году?',
          answer: 'Студенты',
          image:
            'https://avatars.mds.yandex.net/i?id=73cdd5c16c3a77c688952e5de63b4a5a3a22ce89-10637415-images-thumbs&n=13',
        },
        {
          theme_id: 2,
          question: 'Слово из трех букв, которого боится любой мужчина?',
          answer: 'Еще',
          image:
            'https://avatars.mds.yandex.net/i?id=c40c8491498491d8179199ad59e047ad58fda878-9269077-images-thumbs&n=13',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
