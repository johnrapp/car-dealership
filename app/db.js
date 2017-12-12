module.exports = function(client) {
    const getEmployees = async () => {
        const { rows: employees } = await client.query(`SELECT * FROM employees`);
        return employees;
    };

    const getCarmodels = async () => {
        const { rows: carmodels } = await client.query(`SELECT * FROM carmodels`);
        return carmodels;
    };

    const createCarmodel = async ({ brand, model, price }) => {
        const { rows } = await client.query(
            `INSERT INTO carmodels(brand, model, price) VALUES ($1, $2, $3) RETURNING *`,
            [brand, model, price]
        );

        return rows[0];
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
        getCarmodels,
        createCarmodel,
        getTotalSales
    };
};