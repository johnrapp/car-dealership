const { Client } = require('pg');
const db = require('./db');

module.exports = async function createDb() {
    const client = new Client();

    await client.connect();

    return db(client);
};