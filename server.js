const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'))
app.get('/', (req, res) => res.send('Hello World!'));

app.set('port', process.env.PORT || 3001);
app.locals.title = 'express-react-redux-boilerplate';

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});