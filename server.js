const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))