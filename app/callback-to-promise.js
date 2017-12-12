module.exports = function(fn) {
    return new Promise((resolve, reject) => {
        const callback = (err, data) => {
            if (err) reject(err);
            else resolve(data);
        }
        fn(callback);
    });
};