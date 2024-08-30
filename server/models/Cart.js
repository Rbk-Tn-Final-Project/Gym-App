// models/Cart.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // or wherever you initialize your Sequelize instance

const Cart = sequelize.define('Cart', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
}, {
  tableName: 'cart', // Ensure this matches your database table name
  timestamps: false
});

module.exports = Cart;
