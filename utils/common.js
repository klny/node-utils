// return alternative value when null/undefined
function nvl(val, alt = null) {
  return (val ? val : alt)
}

// sleep
function sleep(ms) {
  return new Promise(exec => setTimeout(exec, ms));
}

module.exports = {
  nvl: nvl,
  sleep: sleep
};