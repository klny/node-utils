// check array for duplicate values
function hasDuplicity(arr) {
  if (!arr || arr.length < 2) return false;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }

  return false;
}

// verify if 2 arrays have common value
function haveCommonValue(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;

  for (const x of arr1) {
    if (arr2.includes(x)) return true;
  }

  return false;
}

module.exports = {
  hasDuplicity: hasDuplicity
};