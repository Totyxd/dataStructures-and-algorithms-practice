// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, middle);
  const secondHalf = arr.slice(middle);

  const sortedFH = mergeSort(firstHalf);
  const sortedSH = mergeSort(secondHalf);


  return merge(sortedFH, sortedSH);
};

console.log(mergeSort([7,3,5,2]));

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  let arr = [];
  let idxA = 0;
  let idxB = 0;

  while(idxA < arrA.length || idxB < arrB.length) {
    if (arrA[idxA] === undefined) {
      arr.push(arrB[idxB]);
      idxB++;
    } else if (arrB[idxB] === undefined) {
      arr.push(arrA[idxA]);
      idxA++;
    } else if (arrA[idxA] < arrB[idxB]) {
      arr.push(arrA[idxA]);
      idxA++;
    } else if (arrA[idxA] > arrB[idxB]) {
      arr.push(arrB[idxB]);
      idxB++;
    };
  };

  return arr;
};

console.log(merge([53,54],[55, 56]));

module.exports = [merge, mergeSort];
