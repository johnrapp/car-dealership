const db = require('./db');

module.exports = function bindApi(app) {
    app.get('/employees', async (req, res) => {
        const employees = await db.getEmployees();
        res.json(employees);
    });

    app.get('/carmodels', async (req, res) => {
        const carmodels = await db.getCarmodels();
        res.json(carmodels);
    });

    app.post('/carmodels', async (req, res) => {
        // TODO validate
        const {
            brand,
            model,
            price
        } = req.body;
        
        const inputCarmodel = { brand, model, price };

        const dbCarmodel = await db.createCarmodel(inputCarmodel);
        res.json(dbCarmodel);
    });

    app.get('/total_sales', async (req, res) => {
        const totalSales = await db.getTotalSales();
        res.json(totalSales);
    });
};
