import axios from 'axios';

export function getEmployees() {
    return axios
        .get('http://localhost:8080/employees')
        .then(res => res.data);
}

export function getCarmodels() {
    return axios
        .get('http://localhost:8080/carmodels')
        .then(res => res.data);
}