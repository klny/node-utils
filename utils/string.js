// left pad string to specified length with specified char
function lpad(str, length, char = ' ') {
  let paddedStr = '';
  let strLen = ('' + str).length;

  for (let i = strLen; i < length; i++) {
    paddedStr += char;
  }

  return paddedStr + str;
}

module.exports = {
  lpad: lpad
};