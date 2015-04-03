var request = require('supertest');
var http = require('http'); 
var app = require('./app');

 describe('POST /api_custom', function(){
  it('respond with json', function(done){
    request(app)
      .post('/api_custom/get_near')
      .set('Accept', 'application/json')
	  .send({ long : -79.830992, lat: 34.187947 })
      .expect('Content-Type', /json/)
      .expect(200, done)
      . expect(function(res) {
          //console.log(res.body)
          });
	  

  });
});

