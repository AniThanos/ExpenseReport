const express = require('express');
const jsonServer = require('json-server');
const cors = require('cors')
var app = express();
const bodyParser = require('body-parser')
const router = require('./routes/index')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors());
app.use('/api', jsonServer.defaults(), jsonServer.router('./data/db.json'));

app.use('/expense', router)

const port = process.env.PORT || 3010
app.listen(port, console.log(`Listening on ${port}`));