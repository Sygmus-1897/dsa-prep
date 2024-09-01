console.log('< --------- RECURSIVE INSERTION SORT ------------>')

const { swap, unSortedArrays } = require("../utils");

// Striver Series: https://takeuforward.org/arrays/recursive-insertion-sort-algorithm/

/* 
  Algo:
  1. Start from 0
  2. Check if curr element is smaller than previous element
  3. if yes, keep swapping with previous elem till curr elem is in correct place
  4. once done, move to next element 
*/

/* 
  Pseudo Code:
  sort (arr, curr_idx) {
    if (curr_idx >= arr.len) return;
    j = curr_idx;
    while ( j>0 & arr[j-1] > arr[j]) {
      swap(arr[j-1], arr[j]);
      j--;
    }
    sort(arr, curr_idx+1);
  }
*/


/*
  Complexities:
  Time: 
    Worst, Avg - O(n^2)
    Best - O(n)
  Space: 
    O(n) - Recursive calls
 */



const recursiveInsertionSort = (array, curr_idx) => {
  
  if (curr_idx >= array.length) return;

  let j = curr_idx;
  while (j > 0 && array[j-1] > array[j]) {
    swap(array, j-1, j);
    j--;
  }

  recursiveInsertionSort(array, curr_idx+1);
}

let unSortedArray = unSortedArrays[0];

console.log("Original Array:", unSortedArray);
recursiveInsertionSort(unSortedArray, 0)
console.log("Sorted Array:", unSortedArray);