// Returns map, mapping from an employee id to their sales number
// does not guarantee a sales number for every employee, will only
// include if they've made a sale
module.exports = function getSalesOfEmployees(employees, carmodels, sales) {
    const carmodelsById = carmodels.reduce((carmodelsById, model) => {
        carmodelsById[model.id] = model;
        return carmodelsById;
    }, {});
    
    const employeeSales = sales.reduce((employeeSales, sale) => {
        const { employee_id, carmodel_id } = sale;
        // Insert sales = 0 if employee has not been visited earlier
        // so that the plus operator can be used later on
        if (!(employee_id in employeeSales)) {
            employeeSales[employee_id] = 0;
        }
        const carmodel = carmodelsById[carmodel_id];
        employeeSales[employee_id] += carmodel.price;
        return employeeSales;
    }, {});

    return employeeSales;
};