var inquirer = require('inquirer');
var fs = require('fs');

module.exports = async function() {
    const config = await inquirer.prompt([
        {
            type: 'input',
            name: 'database',
            message: 'Postgres database name',
            default: 'postgres'
        },
        {
            type: 'input',
            name: 'user',
            message: 'Postgres user name',
            default: 'postgres'
        },
        {
            type: 'password',
            name: 'password',
            message: 'Postgres user password',
            default: ''
        },
    ]);
    
    fs.writeFileSync('db-config.json', JSON.stringify(config, null, '\t'));
    
    return config;
};

