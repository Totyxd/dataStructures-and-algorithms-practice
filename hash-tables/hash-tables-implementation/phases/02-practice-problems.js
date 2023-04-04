const HashTable = require("./01-implementation");

function anagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  let str1Table = new HashTable(str1.length);
  for (let index = 0; index < str1.length; index++) {
    const char = str1[index];
    str1Table.insert(`key-${char}`, true);
  };

  for (let index = 0; index < str2.length; index++) {
    const char = str2[index];
    if (!str1Table.read(`key-${char}`)) {
      return false;
    };
  };

  return true;
};


function commonElements(arr1, arr2) {
  const newArr = [];

  let arr1Table = new HashTable(arr1.length);
  for (let index = 0; index < arr1.length; index++) {
    const el = arr1[index];
    arr1Table.insert(`key-${el}`, true);
  };

  for (let index = 0; index < arr2.length; index++) {
    const el = arr2[index];
    if (arr1Table.read(`key-${el}`)) {
      newArr.push(el);
    };
  };

  return newArr
};


function duplicate(arr) {
  let arrTable = new HashTable(arr.length);
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    const count = arrTable.read(`key-${el}`) || 0;
    if (count === 1) {
      return el;
    };
    arrTable.insert(`key-${el}`, count + 1);
  };
};


function twoSum(nums, target) {
  const seen = new HashTable(nums.length);
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.read(`key-${complement}`)) {
      return true;
    };
    seen.insert(`key-${nums[i]}`, nums[i]);
  };

  return false;
};



function wordPattern(pattern, words) {
  if (pattern.length !== words.length) {
    return false;
  }

  const map = {};
  const usedWords = new Set();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (!map[char] && !usedWords.has(word)) {
      map[char] = word;
      usedWords.add(word);
    } else if (map[char] !== word) {
      return false;
    }
  }

  return true;
};



module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
