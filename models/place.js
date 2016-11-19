
var db = require('./db');
var Sequelize = require('sequelize');

var placeSchema = {
    address:{
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state :{
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    location: {
        type: Sequelize.ARRAY(Sequelize.FLOAT),
        allowNull: false
    }
}

var placeConfig = {}

var place = db.define('place', placeSchema, placeConfig);

module.exports = place;