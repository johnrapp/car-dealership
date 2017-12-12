const fs = require('fs');
const callbackToPromise = require('./callback-to-promise');

const dataPath = './data.json';
const dataEncoding = 'utf8';
const getData = () => {
    return callbackToPromise((callback) => {
            fs.readFile(dataPath, dataEncoding, callback);
        })
        .then(json => JSON.parse(json))
        .then(data => data.carshop);
}

// Basically the inverse of getData()
const saveData = (data) => {
    return Promise.resolve(data)
        .then(carshop => ({ carshop }))
        .then(data => JSON.stringify(data, null, '\t'))
        .then(json => callbackToPromise((callback) => {
            fs.writeFile(dataPath, json, dataEncoding, callback)
        }));
};

module.exports = {
    getData,
    saveData
};