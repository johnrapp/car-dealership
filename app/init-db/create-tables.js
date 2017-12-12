const tableQueries = [
    `
    CREATE TABLE EMPLOYEES(
        NAME VARCHAR(100)  NOT NULL,
        ID SERIAL
    );
    `,
    `
    CREATE TABLE CARMODELS(
        BRAND VARCHAR(100)  NOT NULL,
        MODEL VARCHAR(100)  NOT NULL,
        PRICE INT           NOT NULL,
        ID SERIAL
    );
    `,
    `
    CREATE TABLE SALES(
        EMPLOYEE_ID INT    NOT NULL,
        CARMODEL_ID INT    NOT NULL,
        ID SERIAL
    );
    `
]

module.exports = async function(client) {
    return tableQueries.map(tableQuery => client.query(tableQuery));
};