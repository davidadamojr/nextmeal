var restful = require('node-restful');
var mongoose = restful.mongoose;

var testSchema = new mongoose.Schema({
	test: String
});
module.exports = restful.model('Test', testSchema)
