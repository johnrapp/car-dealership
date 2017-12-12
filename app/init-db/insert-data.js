const data = require('./data.json');

module.exports = async function(client) {
    const { employees, carmodels, sales } = data.carshop;

    // The inserts will give them new IDs to make the auto increment works easily
    // this assumes that the data is sorted by ID and that the IDs start at 1

    const insertEmployees = await Promise.all(employees.map(employee => {
        const { name } = employee;
        return client.query(`INSERT INTO employees(name) VALUES ($1)`, [name]);
    }))

    const insertCarmodels = await Promise.all(carmodels.map(carmodel => {
        const { brand, model, price } = carmodel;
        return client.query(
            `INSERT INTO carmodels(brand, model, price) VALUES ($1, $2, $3)`,
            [brand, model, price]
        );
    }))

    const insertSales = await Promise.all(sales.map(sale => {
        const { employee_id, carmodel_id } = sale;
        return client.query(
            `INSERT INTO sales(employee_id, carmodel_id) VALUES ($1, $2)`,
            [employee_id, carmodel_id]
        );
    }))

};