function linearSearch (arr, target) {
  return arr.indexOf(target);
};
let arr = [1,2,3,5,8,9];

function binarySearch(arr, target) {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi && hi >= lo) {
    const mid = Math.floor((lo + hi) / 2);

    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    };
  };

  return -1;
};


module.exports = [linearSearch, binarySearch]
