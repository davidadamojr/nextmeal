var mongoose = require('mongoose');

var MenuItemSchema = new mongoose.Schema({
	name: String,
	price: String,
	image_path: String,
	descrcdiption: String,
	ingredients: [{ name: String, type: String}],
	place_id: String,
	upvotes: Number
});

mongoose.model('Restaurants', MenuItemSchema);