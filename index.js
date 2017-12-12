const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

const bindApi = require('./app/api');
const createDb = require('./app/create-db');

app.listen(port, function () {
	console.log(`Server listening on ${port}`);
});

app.use(express.static('public'));
app.use(bodyParser.json());

createDb().then(function(db) {
	bindApi(app, db);
});

process.on('unhandledRejection', err => console.error(err));