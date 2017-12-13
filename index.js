const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 80;

const bindApi = require('./app/api');
const connectDb = require('./app/connect-db');

app.listen(port, function () {
	console.log(`Server listening on ${port}`);
});

connectDb().then(function(db) {
	app.use(express.static('public', { etag: false }));
	app.use(bodyParser.json());
	
	bindApi(app, db);
	
	// Serve index.html to serve client when not making api request
	app.get('*', function (req, res) {
		res.sendFile(__dirname + '/public/index.html');
	});
});

process.on('unhandledRejection', err => console.error(err));