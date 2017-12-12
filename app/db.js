const { getData, saveData } = require('./file-db');
const getSalesOfEmployees = require('./employee-sales');

const getEmployees = async () => {
    const { employees } = await getData();
    return employees;
};

const getCarmodels = async () => {
    const { carmodels } = await getData();
    return carmodels;
};

const createCarmodel = async (inputCarmodel) => {
    const data = await getData();

    const carmodelId = generateCarmodelId(data);
    const carmodel = {
        id: carmodelId,
        ...inputCarmodel
    };

    const nextData = {
        ...data,
        carmodels: carmodels.concat(carmodel)
    };
    
    return saveData(nextData)
        .then(() => carmodel);
};

const getTotalSales = async () => {
    const { employees, carmodels, sales } = await getData();

    const salesOfEmployees = getSalesOfEmployees(employees, carmodels, sales);
    
    return employees.map((employee) => {
        return Object.assign(employee, {
            sales: salesOfEmployees[employee.id] || 0
        });
    });
};

const generateCarmodelId = (data) => {
    const { carmodels } = data;
    // Assume carmodels is sorted by id
    return carmodels[carmodels.length - 1].id + 1;
};

// Public interface
module.exports = {
    getEmployees,
    getCarmodels,
    createCarmodel,
    getTotalSales
};