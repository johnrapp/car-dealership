import axios from 'axios';

const HOST = 'http://localhost';

export function getEmployees() {
    return axios
        .get(`${HOST}/employees`)
        .then(res => res.data);
}

export function getCarmodels() {
    return axios
        .get(`${HOST}/carmodels`)
        .then(res => res.data);
}