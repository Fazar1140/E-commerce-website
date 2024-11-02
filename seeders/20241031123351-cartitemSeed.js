'use strict';

const product_stock = require('../models/product_stock');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('cart_items',[
    {
      cart_id:1,
      products_id:1,
      product_stock_id:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cart_id:2,
      products_id:4,
      product_stock_id:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cart_id:3,
      products_id:2,
      product_stock_id:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cart_id:4,
      products_id:2,
      product_stock_id:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cart_id:5,
      products_id:5,
      product_stock_id:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cart_id:6,
      products_id:3,
      product_stock_id:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cart_id:7,
      products_id:2,
      product_stock_id:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cart_id:8,
      products_id:2,
      product_stock_id:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cart_id:9,
      products_id:1,
      product_stock_id:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
