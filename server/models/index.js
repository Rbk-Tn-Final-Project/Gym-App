const sequelize = require('../config/database');
const User = require('./user');
const Product = require('./product');
const CoachList = require('./coachs');
const Planning = require('./planning');


CoachList.associate({ Planning });
Planning.associate({ CoachList });





sequelize.sync({ force: false }).then(() => {
    console.log('Database & tables created!');
});

module.exports = {
    User,Product,
    CoachList,
    Planning,
};
