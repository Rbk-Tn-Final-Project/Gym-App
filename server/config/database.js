
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Gym', 'root', 'Momo.1224', {
    host: 'localhost',
    dialect: 'mysql', 
});

module.exports = sequelize;
