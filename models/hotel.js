var db = require('./db');
var Sequelize = require('sequelize');

var hotelSchema = {
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    num_stars: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min:1,
            max:5
        }
    },
    amenities :{
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false,
        set: function(value){
            var arrayOfAmen;

            if(typeof value ==='string'){
                arrayOfAmen = value.split(',').map(s => {
                    return s.trim();
                });
                this.setDataValue('amenities', arrayOfAmen);
            }
            else {
                this.setDataValue('amenities', value);
            }
        }
    }
}

var hotelConfig = {}

var Hotel = db.define('hotel', hotelSchema, hotelConfig);



module.exports = Hotel;