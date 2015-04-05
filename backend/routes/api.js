var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

// models
var Categories = mongoose.model('Categories');
var MenuItems = mongoose.model('MenuItems');
var Pictures = mongoose.model('Pictures');
// end models

var GooglePlaces = require('google-places');
var googlekey = require('../config/configurations').googleApiKey;
var places = new GooglePlaces(googlekey);

// David: I think this should be a GET request since it is retrieving information
router.post('/get_near', function(req, res, next) {
    places.search({keyword: 'restaurants',
         location: [ req.body.lat,req.body.long],
          types: [ 'restaurant']     //type options ->  'restaurant', 'food', 'establishment' ]
    }, function(err, response) {
      res.send(200,response.results);
    });
});

// get all the items for the categories model
router.get('/preferences', function(req, res, next) {
	Preferences.find(function(err, preferences) {
		if (err) { return next(err); }
		
		res.json(preferences);
	});
});

module.exports = router;

