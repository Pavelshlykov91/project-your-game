'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Questions', [{
          theme_id: 1,
          content: 'Какая из перечисленных рыб начинает нерестится раньше всех: щука, окунь, красноперка?',
          answer: 'щука',
          price: 200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 1,
          content: 'Есть в мире еще одна рыба, со странным названием и это: ёрш кракожор, минтай ротоглот, таймень хвостозадерот, бычок психролют. это рыба капля, вьюн горбунючок',
          answer: 'Бычок психролют -рыба капля',
          price: 400,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 1,
          content: 'В какое время суток ловить окуня практически бесполезно?',
          answer: 'рокфишинг',
          price: 600,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 1,
          content: 'Существует множество музыкальных направлений: джаз, классика, хэви металл…..а есть вид рыбалки созвучный музыкальному стилю. И это: джазфишинг,  металлфишинг, вальсфишинг,  хардхэвифишинг, рокфишинг',
          answer: 'answer22',
          price: 800,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 1,
          content: 'Какая из рыб не является представителем семейства карповых? Плотва, сиг, елец, карась',
          answer: 'Сиг',
          price: 1000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 2,
          content: 'Где происходит действие сериала Южный парк(штат)',
          answer: 'Колорадо',
          price: 200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },        {
          theme_id: 2,
          content: 'У кого из ученых в Теории большого взрыва нет докторской степени?',
          answer: 'у Говарда',
          price: 400,
          createdAt: new Date(),
          updatedAt: new Date(),
        },        {
          theme_id: 2,
          content: 'Какую еду закидывает на крышу Волтер Вайт в сериале во Все тяжкие',
          answer: 'пиццу',
          price: 600,
          createdAt: new Date(),
          updatedAt: new Date(),
        },        {
          theme_id: 2,
          content: 'Закончите фразу Волтера. "Мне не грозит опасность, Скайлер, я сам опасность! Кто-то откроет дверь и схватит пулю. Думаешь, им буду я?! Нет. Это ""',
          answer: 'я стучу в дверь',
          price: 800,
          createdAt: new Date(),
          updatedAt: new Date(),
        },        {
          theme_id: 2,
          content: 'Какое историческое событие происходит в первом сезоне Аббатства Даунтан',
          answer: 'крушение Титаника',
          price: 1000,
          createdAt: new Date(),
          updatedAt: new Date(),
        }], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Questions', null, {});
  }
};
