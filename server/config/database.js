const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Gym', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = sequelize;