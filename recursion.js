/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;

  const word = words.pop();
  const currLongest = longest(words);

  if (word.length > currLongest) return word.length;

  return currLongest;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return "";

  const newString = everyOther(str.slice(1));

  if (str.length % 2 === 0) return newString;

  return str[0] + newString;

}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  arrCopy = [...arr];

  if (arrCopy.length === 0) return false;

  currVal = arrCopy.pop();
  if (currVal === val) return true;
  return find(arrCopy, val);

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  let newStr = [];

  function _reverse(str, i) {
    if (i < 0) return;
    newStr.push(str[i]);
    _reverse(str, i - 1);
  };

  _reverse(str, str.length - 1);
  return (newStr.join('') === str);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if(str.length === 0) return "";

  return revString(str.slice(1)) + str[0];
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

  function _findIndex(arr, val, i = 0){
    if(arr[i] === val) return i;
    if(arr.length - 1 === i) return -1;
    return _findIndex(arr, val, i + 1)
  }

  return _findIndex(arr, val);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];

  function _gatherStrings(obj){
    for(let key in obj){
      if(typeof obj[key] === 'object'){
        _gatherStrings(obj[key]);
      }
      if(typeof obj[key] === 'string'){
        arr.push(obj[key]);
      }
    }
  }
  _gatherStrings(obj);

  return arr;
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {
  function _binarySearch(arr, val, lowerIdx, upperIdx){
    let middleIdx = Math.floor((lowerIdx + upperIdx) / 2);

    if(val === arr[middleIdx]) return true;
    if(upperIdx - lowerIdx === 1 || arr.length === 0) return false;
    if(val > arr[middleIdx]) return _binarySearch(arr, val, middleIdx, upperIdx);
    if(val < arr[middleIdx]) return _binarySearch(arr, val, lowerIdx, middleIdx);
  }

  return _binarySearch(arr, val, 0, arr.length);
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {

  function _binarySearchIndex(arr, val, lowerIdx, upperIdx){
    let middleIdx = Math.floor((lowerIdx + upperIdx) / 2);

    if(val === arr[middleIdx]) return middleIdx;
    if(upperIdx - lowerIdx === 1 || arr.length === 0) return -1;
    if(val > arr[middleIdx]) return _binarySearchIndex(arr, val, middleIdx, upperIdx);
    if(val < arr[middleIdx]) return _binarySearchIndex(arr, val, lowerIdx, middleIdx);
  }

  return _binarySearchIndex(arr, val, 0, arr.length);
}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
