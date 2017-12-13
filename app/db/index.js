const carmodelsDb = require('./carmodels');

module.exports = function(client) {
    const getEmployees = async () => {
        const { rows: employees } = await client.query(`SELECT * FROM employees ORDER BY id`);
        return employees;
    };

    const getTotalSales = async () => {
        const { rows: totalSales } = await client.query(`
            SELECT employees.*, SUM(price) AS sales FROM sales
                JOIN carmodels ON (sales.carmodel_id = carmodels.id)
                JOIN employees ON (sales.employee_id = employees.id)
            GROUP BY employees.id, employees.name
            ORDER BY id
        `);

        return salesAsInt(totalSales);
    };

    // For some reason the SUM(price) in the SQL query returns a string instead of int
    // It does not do this with f.e MIN(price) but does so with AVG(price)
    // which is wierd. This is a hack to fix it
    function salesAsInt(totalSales) {
        return totalSales.map(item => {
            return {
                ...item,
                sales: parseInt(item.sales, 10)
            }
        });
    }

    // Public interface
    return {
        getEmployees,
        getTotalSales,
        ...carmodelsDb(client)
    };
};