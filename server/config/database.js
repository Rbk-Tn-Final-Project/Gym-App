const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Gym', 'root', 'Med.bann@1224', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = sequelize;