const crypto = require('crypto');

function getRandomHex(length) {
  return crypto.randomBytes(length/2).toString('hex');
}

function getRandomBase64(length) {
  return crypto.randomBytes(length*3/4).toString('base64');
}

module.exports = {
  getRandomHex: getRandomHex,
  getRandomBase64: getRandomBase64
};