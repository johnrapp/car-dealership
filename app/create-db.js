const dbConfig = require('../db-config.json');
const { Client } = require('pg');
const db = require('./db');

module.exports = async function createDb() {
    const client = new Client(dbConfig);

    await client.connect();

    return db(client);
};