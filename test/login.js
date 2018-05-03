

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);


  describe('Login API', () => {


      it('Successfull login with correct credentials', (done) => {
        chai.request(server)
            .post('/login')
            .send({
                email: 'paras@gmail.com',
                password: '123456'
            })
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('data');
                res.body.should.have.property('status').equals(200);
              done();
            });
      });
      it('Login api with no parameters passed', (done) => {
        chai.request(server)
            .post('/login')
            .send({
            })
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('data');
                res.body.should.have.property('status').equals(400);
              done();
            });
      });
      it('Login api with wrong email/password passed', (done) => {
        chai.request(server)
            .post('/login')
            .send({
                email: 'paras@dsddsgmail.com',
                password: '12345sddsds6'
            })
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('data');
                res.body.should.have.property('status').equals(300);
              done();
            });
      });
      it('Login api with invalid email,parsing error', (done) => {
        chai.request(server)
            .post('/login')
            .send({
                email: "paras@dsddsgmail.com's",
                password: '12345sddsds6'
            })
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('data');
                res.body.should.have.property('status').equals(402);
              done();
            });
      });
  });

