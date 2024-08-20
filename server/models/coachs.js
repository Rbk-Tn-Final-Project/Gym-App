const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Planning = require ('./planning')

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

CoachList.associate = (models) => {
    CoachList.hasMany(models.Planning, { foreignKey: 'coachId', as: 'plannings' });
};


module.exports = {CoachList:CoachList};
