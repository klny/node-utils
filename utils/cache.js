const cached = {};

function cache(f, forceRefresh = false, retention = 3600000, name = f.name) {
  let c = cached[name];
  let currentMillis = Date.now();

  if (forceRefresh || !c || c.validUntil < currentMillis) {
    let result = f();
    cached[name] = {result: result, validUntil: currentMillis + retention};
    return result;
  }

  return c.result;
}

module.exports = cache;