var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var cors = require('cors');

// models
var Categories = mongoose.model('Category');
var MenuItems = mongoose.model('MenuItem');
var Pictures = mongoose.model('Picture');
// end models

/* var GooglePlaces = require('google-places');
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
}); */

router.use(cors());

// get all the items for the categories model
router.get('/preferences', function(req, res, next) {
	Categories.find(function(err, preferences) {
		if (err) { return next(err); }
		
		res.json(preferences);
	});
});

module.exports = router;

