const lpad = require('./string').lpad;

// get timestamp from date ["YYYY-MM-DDTHH24:Mi:SS"]
function getTimestamp(date = new Date(), separator = 'T') {
  const day = lpad(date.getDate(), 2, '0');
  const month = lpad(date.getMonth() + 1, 2, '0');
  const year = date.getFullYear();

  const hour = lpad(date.getHours(), 2, '0');
  const min = lpad(date.getMinutes(), 2, '0');
  const sec = lpad(date.getSeconds(), 2, '0');

  return year + '-' + month + '-' + day + separator + hour + ':' + min + ':' + sec;
}

// get duration from start in ms
function getDuration(start) {
  const diff = process.hrtime(start);
  return diff[0] * 1000 + diff[1] / 1000000;
}

module.exports = {
  getTimestamp: getTimestamp,
  getDuration: getDuration
};