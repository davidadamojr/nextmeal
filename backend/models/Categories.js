var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
	name: String,
	items: [{ name: String }]
});

mongoose.model('Category', CategorySchema);