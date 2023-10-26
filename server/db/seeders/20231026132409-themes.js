'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Themes', [{
          title: 'Тема 1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Тема 2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Тема 3',
          createdAt: new Date(),
          updatedAt: new Date()}], {});
            },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Themes', null, {});
  }
};
