function findSmallest(array) {      //O(n)
  let smallest = 0;

  for (let index = 1; index < array.length; index++) {
    const element = array[index];
    if (element < array[smallest]) {
      smallest = index;
    };
  };

  return smallest;
};

function selectionSort(arr) {
  let array = arr.slice();
  let sorted = [];

  while (array.length > 0) {
    console.log(sorted.join(","));
    const smallest = findSmallest(array);
    sorted.push(array[smallest]);                                       //O(n * n) => O(n ** 2)
    array.splice(smallest, 1);
  };

  return sorted;
};

const test = [3,5,6,8,1,9,2,0];
console.log(selectionSort(test));
console.log(test);


function selectionSortInPlace(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    };
  }
  return arr;
};



module.exports = [selectionSort, selectionSortInPlace];
