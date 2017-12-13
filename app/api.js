const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');

module.exports = function bindApi(app, db) {
    app.get('/employees', async (req, res) => {
        const employees = await db.getEmployees();
        res.json(employees);
    });

    app.get('/carmodels', async (req, res) => {
        const carmodels = await db.getCarmodels();
        res.json(carmodels);
    });

    const isCarmodel = [
        check('brand', 'Du måste inkludera ett bilmärke').exists(),
        check('model', 'Du måste inkludera en modell').exists(),
        check('price', 'Du måste inkludera ett pris, vilket är ett heltal').custom(Number.isInteger)
    ];

    const carmodelExists = [
        check('id')
            .exists().withMessage('Du måste inkludera ett ID')
            .custom(db.carmodelExists).withMessage('Bilmodellen finns inte')
    ];

    app.post('/carmodels', isCarmodel, async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.json({ error: errors.mapped() });
        }

        const inputCarmodel = matchedData(req);

        const dbCarmodel = await db.createCarmodel(inputCarmodel);
        res.json(dbCarmodel);
    });

    app.put('/carmodels/:id', [
        ...isCarmodel,
        ...carmodelExists
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.json({ error: errors.mapped() });
        }

        const inputCarmodel = matchedData(req);

        const dbCarmodel = await db.updateCarmodel(inputCarmodel);
        res.json(dbCarmodel);
    });

    app.delete('/carmodels/:id', [
        ...isCarmodel,
        ...carmodelExists
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.json({ error: errors.mapped() });
        }

        const inputCarmodel = matchedData(req);

        const dbCarmodel = await db.deleteCarmodel(inputCarmodel);
        res.json(dbCarmodel);
    });

    app.get('/total_sales', async (req, res) => {
        const totalSales = await db.getTotalSales();
        res.json(totalSales);
    });
};
