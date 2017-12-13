const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');

const isCarmodel = [
    check('brand', 'Du måste inkludera ett bilmärke').exists(),
    check('model', 'Du måste inkludera en modell').exists(),
    check('price', 'Du måste inkludera ett pris, vilket är ett heltal').custom(Number.isInteger)
];

const carmodelExists = (db) => [
    check('id')
        .exists().withMessage('Du måste inkludera ett ID')
        .custom(db.carmodelExists).withMessage('Bilmodellen finns inte')
];

const middleWare = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.json({ error: errors.mapped() });
    }

    req.matchedData = matchedData(req);
    next();
};

module.exports = {
    isCarmodel,
    carmodelExists,
    middleWare
};