var mongoose = require('mongoose');

var PictureSchema = new mongoose.Schema({
	name: String,
	path: String,

});

mongoose.model('Picture', PictureSchema);