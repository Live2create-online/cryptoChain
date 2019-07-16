
const crypto = require('crypto');

// js spread operator being used as a parameter to take in all inputs and place them into an array called inputs
const cryptoHash = (...inputs) => {
    const hash = crypto.createHash('sha256');

    hash.update(inputs.sort().join(' '));

    return hash.digest('hex');
};




module.exports = cryptoHash