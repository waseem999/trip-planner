var db = require('./db');
var Sequelize = require('sequelize');

var activitySchema = {
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    age_range: {
        type: Sequelize.STRING,
        allowNull: false
    }
}

var activityConfig = {}

var Activity = db.define('activity', activitySchema, activityConfig);



module.exports = Activity;