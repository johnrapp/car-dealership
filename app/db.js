const data = require('../data.json');

const getEmployees = () => {
    const { employees } = data.carshop;
    return employees;
};

const getEmployeeById = (id) => {
    const { employees } = data.carshop;
    return employees.find(employee => employee.id === id);
};

const getCarModels = () => {
    const { carmodels } = data.carshop;
    return carmodels;
};

const createCarModel = () => {
    // TODO implement
};

const getCarModelById = (id) => {
    const { carmodels } = data.carshop;
    return carmodels.find(model => model.id === id);
};

const getTotalSales = () => {
    const { employees, carmodels, sales } = data.carshop;
    return employees.map((employee) => {
        // TODO implement
        return Object.assign(employee, {
            sales: 0
        });
    });
};


module.exports = {
    getEmployees,
    getCarModels,
    createCarModel,
    getTotalSales
}