const express = require('express');
const carmodelsApi = require('./carmodels');

module.exports = function bindApi(app, db) {
    app.get('/employees', async (req, res) => {
        const employees = await db.getEmployees();
        res.json(employees);
    });

    app.get('/total_sales', async (req, res) => {
        const totalSales = await db.getTotalSales();
        res.json(totalSales);
    });

    app.use('/carmodels', carmodelsApi(express.Router(), db));
};
