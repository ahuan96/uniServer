'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Users', [{
        username: 'root',
        password: '123456',
        nickname:'root',
        sex:'1',
        age:'25',
        city:'南京',
        email:'123@qq.com',
        phone:'18255556666',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        username: 'root2',
        password: '123456',
        nickname:'root',
        sex:'1',
        age:'25',
        city:'南京',
        email:'123@qq.com',
        phone:'18255556666',
        createdAt:new Date(),
        updatedAt:new Date()
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
