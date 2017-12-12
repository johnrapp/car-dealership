const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

const bindApi = require('./app/api');

app.listen(port, function () {
	console.log(`Server listening on ${port}`);
});

app.use(express.static('public'));
app.use(bodyParser.json());

bindApi(app);