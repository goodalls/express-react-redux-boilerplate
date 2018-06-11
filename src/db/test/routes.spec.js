const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../../../server');

const environment = process.env.NODE_ENV || 'test';
const configuration = require('../../../knexfile')[environment];
const database = require('knex')(configuration);

chai.use(chaiHttp);

describe('API routes', () => {
      beforeEach((done) => {
        database.migrate.rollback()
          .then(() => {
            database.migrate.latest()
              .then(() => {
                return database.seed.run()
                  .then(() => {
                    done();
                  });
              });
          });
      });

      // tests go here
    })