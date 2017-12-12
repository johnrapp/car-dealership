const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8080;

const bindApi = require('./app/api');
const createDb = require('./app/create-db');

app.listen(port, function () {
	console.log(`Server listening on ${port}`);
});

app.use(bodyParser.json());
app.use(cors());

createDb().then(function(db) {
	// const apiRouter = express.Router();
	bindApi(app, db);
	// app.use('/api', apiRouter);
	app.use(express.static('public'));
});

process.on('unhandledRejection', err => console.error(err));