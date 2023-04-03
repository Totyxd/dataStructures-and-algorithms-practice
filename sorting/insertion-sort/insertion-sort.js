// Out of place Insertion Sort
// Does not mutate the original array
function insertionSort(arr) {
  let arrCopy = arr.slice();
  let sorted = [];

  while(arrCopy.length > 0) {
    console.log(sorted.join(","));

    const popped = arrCopy.pop();
    sorted.push(popped);

    for (let i = sorted.length - 2; i >= 0; i--) {
      if (sorted[i] < popped) {
        break;
      }
      else {
        sorted[i + 1] = sorted[i];
        sorted[i] = popped;
      };
    };
  };

  return sorted;
};

let test = [89,75,32,56];
console.log(insertionSort(test));
console.log(test);

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(array) {
  let temp;
  let divider;

  for (let index = 0; index < array.length - 1; index++) {
    if (array[index] > array[index + 1]) {
      temp = array[index];
      divider = index;
      break;
    };
  };

  while (divider < array.length) {
    console.log(array.join(","));
    for (let i = divider - 1; i >= 0; i--) {
      if (temp > array[i]) {
        break;
      } else {
        array[i + 1] = array[i];
        array[i] = temp;
      };
    };
    divider++;
    temp = array[divider];
  };

  return array;
};

console.log(insertionSortInPlace(test));
console.log(test);
let test2 = [7,6,3,5,0,9,12,10,15,13,2];
console.log(insertionSortInPlace(test2));

module.exports = [insertionSort, insertionSortInPlace];
