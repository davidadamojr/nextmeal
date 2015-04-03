var express = require('express');
var router = express.Router();
var Categories = require('../models/Categories')
var MenuItems = require('../models/MenuItems')
var Restaurants = require('../models/Restaurants')
var Pictures = require('../models/Pictures')
var GooglePlaces = require('google-places');
var googlekey =require('../config/configurations').googleApiKey
var places = new GooglePlaces(googlekey);



router.post('/get_near', function(req, res, next) {
    places.search({keyword: 'restaurants',
         location: [ res.body.lat,res.body.long],
          types: [ 'restaurant']     //type options ->  'restaurant', 'food', 'establishment' ]
    }, function(err, response) {
      res.send(200,response.results);
    });

});
module.exports = router;

