// Convert a function that expect a callback to a Promise
// Input a function, fn, and expect it to be called with a
// callback of type (err, data) => () that will resolve data
// and reject if err is truthy
module.exports = function(fn) {
    return new Promise((resolve, reject) => {
        const callback = (err, data) => {
            if (err) reject(err);
            else resolve(data);
        }
        fn(callback);
    });
};