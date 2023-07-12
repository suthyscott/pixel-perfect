const {DataTypes} = require('sequelize')

const {sequelize}= require('../util/database')

module.exports = {
    SavedPhone: sequelize.define('saved_phone', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }
    })
}