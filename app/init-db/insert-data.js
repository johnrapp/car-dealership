const data = require('./data.json');

module.exports = async function(db) {
    const { employees, carmodels, sales } = data.carshop;

    const insertEmployees = await Promise.all(employees.map(employee => {
        const { id, name } = employee;
        return db.query(`INSERT INTO employees(id, name) VALUES ($1, $2)`, [id, name]);
    }))

    const insertCarmodels = await Promise.all(carmodels.map(carmodel => {
        const { id, brand, model, price } = carmodel;
        return db.query(
            `INSERT INTO carmodels(id, brand, model, price) VALUES ($1, $2, $3, $4)`,
            [id, brand, model, price]
        );
    }))

    const insertSales = await Promise.all(sales.map(sale => {
        const { id, employee_id, carmodel_id } = sale;
        return db.query(
            `INSERT INTO sales(id, employee_id, carmodel_id) VALUES ($1, $2, $3)`,
            [id, employee_id, carmodel_id]
        );
    }))

};