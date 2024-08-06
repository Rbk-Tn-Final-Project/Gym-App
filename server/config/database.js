const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Gym', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = sequelize;