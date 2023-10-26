'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Questions', [{
          theme_id: 1,
          content: 'test1',
          answer: 'answer1',
          price: 200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 1,
          content: 'test2',
          answer: 'answer2',
          price: 300,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 2,
          content: 'test21',
          answer: 'answer21',
          price: 400,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 2,
          content: 'test22',
          answer: 'answer22',
          price: 500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 3,
          content: 'test31',
          answer: 'answer31',
          price: 500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 3,
          content: 'test32',
          answer: 'answer32',
          price: 500,
          createdAt: new Date(),
          updatedAt: new Date(),
        }], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Questions', null, {});
  }
};
