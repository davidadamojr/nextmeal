var request = require('supertest');
var http = require('http'); 
var app = require('./app')

 describe('GET /users', function(){
  it('respond with json', function(done){
    request(app)
      .post('/api/get_near')
      .set('Accept', 'application/json')
	  .send({ long_: 23423423, lat_: 2342343 })
      .expect('Content-Type', /json/)
      .expect(200, done)
	  //. expect(function(res) {console.log(res.body)})
	  

  })
})

