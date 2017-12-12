const createTables = require('./create-tables');
const insertData = require('./insert-data');

process.on('unhandledRejection', err => console.error(err));

(async () => {
    const { Client } = require('pg');

    const client = new Client();

    await client.connect();

    await createTables(client);

    await insertData(client)    
    
    await client.end()
})();
