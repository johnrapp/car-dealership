const validate = require('./validate-carmodels');

module.exports = function carmodelsApi(app, db) {
    app.get('/', async (req, res) => {
        const carmodels = await db.getCarmodels();
        res.json(carmodels);
    });

    app.get('/:id', [
        ...validate.carmodelExists(db),
        validate.middleWare,
    ], async (req, res) => {
        const { id } = req.matchedData;

        const carmodels = await db.getCarmodel(id);
        res.json(carmodels);
    });

    app.post('/', [
        ...validate.isCarmodel,
        validate.middleWare,
    ], async (req, res) => {
        const inputCarmodel = req.matchedData;

        const carmodel = await db.createCarmodel(inputCarmodel);
        res.json(dbCarmodel);
    });

    app.put('/:id', [
        ...validate.isCarmodel,
        ...validate.carmodelExists(db),
        validate.middleWare,
    ],
    async (req, res) => {
        const inputCarmodel = req.matchedData;

        const carmodel = await db.updateCarmodel(inputCarmodel);
        res.json(carmodel);
    });

    app.delete('/:id', [
        ...validate.isCarmodel,
        ...validate.carmodelExists(db),
        validate.middleWare,
    ],
    async (req, res) => {
        const { id } = req.matchedData;

        const success = await db.deleteCarmodel(id);
        res.json(success);
    });

    return app;
};
