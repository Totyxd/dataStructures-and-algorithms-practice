function quicksort(arr) {

  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  let left = [];
  let right = [];

  for (let index = 1; index < arr.length; index++) {
    const element = arr[index];
    if (element < pivot) {
      left.push(element);
    } else {
      right.push(element)
    };
  };

  const leftSort = quicksort(left);  // Recursively sort the left
  const rightSort = quicksort(right); // Recursively sort the right

  leftSort[leftSort.length] = pivot;      // Return the left, pivot and right in sorted order
  return leftSort.concat(rightSort);
};

let arr = [7,3,5,2,0,9,6];
console.log(quicksort(arr));  // => [0, 2, 3, 5, 6, 7, 9]
console.log(arr); // => [7, 3, 5, 2, 0, 9, 6];
console.log(quicksort([256,988,520,436,754])); // => [ 256, 436, 520, 754, 988 ]

module.exports = [quicksort];

