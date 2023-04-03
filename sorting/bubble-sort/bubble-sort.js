
/*function bubbleSort(array) {

    for (let index = 0; index < array.length; index++) {

      for (let index2 = 0; index2 < array.length; index2++) {

        if (array[index] < array[index2]) {
          let tmp = array[index];
          array[index] = array[index2];
          array[index2] = tmp;
        };
      };
    };

    return array;
};*/

function bubbleSort(array) {
  let requiredSwap = false;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      requiredSwap = true;
      const tmp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = tmp;
    };
  };

  if (requiredSwap) {
    bubbleSort(array);
  };

  return array;
};

module.exports = bubbleSort;
