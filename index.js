const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 80;

const bindApi = require('./app/api');
const connectDb = require('./app/connect-db');

app.listen(port, function () {
	console.log(`Server listening on ${port}`);
});

app.use(express.static('public', { etag: false }));
app.use(bodyParser.json());
app.use(cors());

connectDb().then(function(db) {
	bindApi(app, db);
});

process.on('unhandledRejection', err => console.error(err));