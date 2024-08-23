
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gym', 'root', 'Momo.1224', {
    host: 'localhost',
    dialect: 'mysql', 
});

module.exports = sequelize;
