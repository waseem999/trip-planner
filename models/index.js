var db = require('./db');
var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');

console.log("HOTEL ", Hotel)

// associations
Activity.belongsTo(Place);
Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);



