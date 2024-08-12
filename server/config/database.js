
const { Sequelize } = require('sequelize');



const sequelize = new Sequelize('gym', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql', 
});

module.exports = sequelize;
