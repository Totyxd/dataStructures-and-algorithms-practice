function ageSort(users) {
  return users.sort((a, b) => a.age - b.age);
};

function oddEvenSort(arr) {
  return arr.sort((a, b) => {
    if (b % 2 === 1 && a % 2 === 0) {
      return 1;
    } else if (a % 2 === 1 && b % 2 === 0) {
      return -1;
    };
    return a - b;
  });
};

function validAnagrams(s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

function reverseBaseSort(arr) {
  arr.sort((a, b) => {
    if (a.toString().length === b.toString().length) {
      return a - b;
    };
    return b.toString().length - a.toString().length;
  });

  return arr;
};

function frequencySort(arr) {
  return arr.sort((a, b) => {
    let aCount = 1;
    let bCount = 1;

    for (let index = 0; index < arr.length; index++) {
      if (arr[index] === a) {
        aCount++;
      } else if (arr[index] === b) {
        bCount++;
      };                                             //Not the most efficient implementation but wanted to try using sort and nothing else. Could use and outer obj with freqs to improve.
    };

    if (aCount < bCount) {
      return -1;
    };
    if (aCount > bCount) {
      return 1;
    };
    if (aCount === bCount) {
      return b - a;
    };
  });
};

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];


const pancakeSort = function(arr) {

  if (arr.length <= 1) return arr;

  let biggestNum = arr[0];
  let idx = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > biggestNum) {
      biggestNum = arr[i];
      idx = i;
    };
  };

  arr.splice(idx, 1);

  pancakeSort(arr);

  arr.push(biggestNum);

  return arr;
};


console.log(pancakeSort([3,2,4,1,0,9,7,5]));
