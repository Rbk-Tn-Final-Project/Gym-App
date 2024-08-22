const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    images: DataTypes.JSON,
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL(10, 2),
    description : DataTypes.STRING,

});

module.exports = Product;