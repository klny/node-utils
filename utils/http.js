// proper error handling in Express API calls
function runAsync(call) {
  return (req, res, next) => call(req, res, next).catch(next);
}

// get token from request auth header
function getAuthHeaderToken(req) {
  const authHeader = req.headers['x-access-token'] || req.headers['authorization'];
  if (!authHeader) return null;

  // split auth type (Bearer/Basic) from token
  return authHeader.split(' ')[1];
}

// get cookies as JS object (name -> value)
function getCookies(req) {
  if (!req.headers.cookie) return;

  const rawCookies = req.headers.cookie.split('; ');

  const cookies = {};
  rawCookies.forEach(rawCookie => {
    const cookie = rawCookie.split('=');
    cookies[cookie[0]] = cookie[1];
  });

  return cookies;
}

// get array from string in query param (?param=value1,value2,value3) and trim whitespaces
function getQueryArray(value) {
  if (!value) return null;

  return value.split(',').map(function(p) {
    return p.trim();
  });
}

module.exports = {
  runAsync: runAsync,
  getAuthHeaderToken: getAuthHeaderToken,
  getCookies: getCookies,
  getQueryArray: getQueryArray
};