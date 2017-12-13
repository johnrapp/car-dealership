const setupConfig = require('./setup-config');
const createTables = require('./create-tables');
const insertData = require('./insert-data');

process.on('unhandledRejection', err => console.error(err));

(async () => {
    const { Client } = require('pg');

    console.log('First: let\'s set up the database config.')

    const config = await setupConfig();

    console.log('Successfully set up!');

    const client = new Client(config);

    try {
        await client.connect();
    } catch(e) {
        console.log('There was an error connecting to postgres. Are you sure the credentials are correct?')
        return;
    }

    try {
        await createTables(client);

        await insertData(client)
    } catch(e) {
        // Log error in case there was another reason than suggested below
        console.log(e);
        console.log('There was an error seting up the database. Have you already set it up?');
        return;
    }

    console.log('Database initialized!');
    
    await client.end()
})();
