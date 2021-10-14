// stringify JSON with circular reference
function stringifyCircJSON(json) {
  let cache = [];

  return JSON.stringify(json, (key, value) => {
    // check all objects for duplicate reference
    if (typeof value === 'object' && value !== null) {
      // check duplicate value
      if (cache.includes(value)) return;
      cache.push(value);
    }

    return value;
  });
}

module.exports = {
  stringifyCircJSON: stringifyCircJSON
};