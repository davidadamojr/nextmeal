var express = require('express');
var router = express.Router();
var Test = require('../models/test');
//router.get('/info',function(req,res){
//	res.send('api working')
//});
Test.methods(['get','put','post','delete']);
Test.register(router,'/test');


module.exports = router;
