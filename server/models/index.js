const sequelize = require('../config/database');
const User = require('./user');










sequelize.sync({ force: false }).then(() => {
    console.log('Database & tables created!');
});

module.exports = {
    User,
   
};
