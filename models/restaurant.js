var db = require('./db');
var Sequelize = require('sequelize');

var restaurantSchema = {
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cuisine :{
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false,
        set: function(value){
            var arrayOfCuisine;

            if(typeof value ==='string'){
                arrayOfCuisine = value.split(',').map(s => {
                    return s.trim();
                });
                this.setDataValue('cuisine', arrayOfCuisine);
            }
            else {
                this.setDataValue('cuisine', value);
            }
        }
    },
    price : {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate : {
            min: 1,
            max: 5
        }
    }
}

var restaurantConfig = {}

var Restaurant = db.define('restaurant', restaurantSchema, restaurantConfig);


module.exports = Restaurant;