const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CoachList = sequelize.define('CoachList', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    picture: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    phone: {
        type: DataTypes.STRING,
    },
    specialty: {
        type: DataTypes.STRING,
    },
}, {
    tableName: 'coach_list',
    timestamps: false,
});

module.exports = CoachList;
