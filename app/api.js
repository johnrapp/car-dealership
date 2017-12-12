const db = require('./db');

module.exports = function bindApi(app) {
    app.get('/employees', (req, res) => {
        const employees = db.getEmployees();
        res.json(employees);
    });

    app.get('/carmodels', (req, res) => {
        const carmodels = db.getCarModels();
        res.json(carmodels);
    });

    app.post('/carmodels', (req, res) => {
        // TODO implement
    });

    app.get('/total_sales', (req, res) => {
        const totalSales = db.getTotalSales();
        res.json(totalSales);
    });
};
