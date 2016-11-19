var express = require('express');
var router = express.Router();
var Place = require('../models/place');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');
var Promise = require('bluebird');

router.get('/', function(req, res, next){
    var findAllHotels = Hotel.findAll();
    var findAllRestaurants = Restaurant.findAll();
    var findAllActivities = Activity.findAll();

    Promise.all([findAllActivities, findAllHotels, findAllRestaurants]).then(function(value){
        var activity = value[0];
        var hotel = value[1];
        var restaurant = value[2];
        res.render('index', {hotels: hotel, restaurants: restaurant, activities: activity})
    })
})

module.exports = router;