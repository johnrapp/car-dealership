const getData = () => {
    return require('../data.json');
}

const getEmployees = () => {
    const { employees } = getData().carshop;
    return employees;
};

const getCarModels = () => {
    const { carmodels } = getData().carshop;
    return carmodels;
};

const createCarModel = () => {
    // TODO implement
};

const getTotalSales = () => {
    const { employees, carmodels, sales } = getData().carshop;

    const salesOfEmployees = getSalesOfEmployees(employees, carmodels, sales);
    
    return employees.map((employee) => {
        return Object.assign(employee, {
            sales: salesOfEmployees[employee.id] || 0
        });
    });
};
 
// Returns map, mapping from an employee id to their sales number
// does not guarantee a sales number for every employee, will only
// include if they've made a sale
const getSalesOfEmployees = (employees, carmodels, sales) => {
    const carmodelsById = carmodels.reduce((carmodelsById, model) => {
        carmodelsById[model.id] = model;
        return carmodelsById;
    }, {});
    
    const employeeSales = sales.reduce((employeeSales, sale) => {
        const { employee_id, carmodel_id } = sale;
        if (!(employee_id in employeeSales)) {
            employeeSales[employee_id] = 0;
        }
        const carmodel = carmodelsById[carmodel_id];
        employeeSales[employee_id] += carmodel.price;
        return employeeSales;
    }, {});

    return employeeSales;
}

// Public interface
module.exports = {
    getEmployees,
    getCarModels,
    createCarModel,
    getTotalSales
}