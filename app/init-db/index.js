const dbConfig = require('../../db-config.json');
const createTables = require('./create-tables');
const insertData = require('./insert-data');

process.on('unhandledRejection', err => console.error(err));

(async () => {
    const { Client } = require('pg');

    const client = new Client(dbConfig);

    await client.connect();

    await createTables(client);

    await insertData(client)

    console.log('Database initialized!');
    
    await client.end()
})();
