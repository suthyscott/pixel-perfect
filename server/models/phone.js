const {DataTypes} = require('sequelize')

const {sequelize}= require('../util/database')

module.exports = {
    Phone: sequelize.define('phone', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: DataTypes.STRING,
        releaseYear: DataTypes.STRING
    })
}