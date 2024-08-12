const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const CoachList = require('./coachs')

const Planning = sequelize.define('Planning', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    eventName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    eventDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    eventTime: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT,
    },
    coachId: {
        type: DataTypes.INTEGER,
        references: {
            model: CoachList,
            key: 'id',
        },
    },
}, {
    tableName: 'planning',
    timestamps: false,
});

Planning.belongsTo(CoachList, { foreignKey: 'coachId' });

module.exports = Planning;
