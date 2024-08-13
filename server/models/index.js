const sequelize = require('../config/database');
const User = require('./user');
const Product = require('./product');








//node index.js 
sequelize.sync({ force: false }).then(() => {
    console.log('Database & tables created!');
});

module.exports = {
    User,Product
   
};
