console.log('< --------- INSERTION SORT ------------>')

const { swap, unSortedArrays } = require("../utils");

/* 
  Algo:
  1. Start from 0
  2. Check if curr element is smaller than previous element
  3. if yes, keep swapping with previous elem till curr elem is in correct place
  4. once done, move to next element 
*/

/* 
  Pseudo Code:
  for (i -> 0 to N) {
    j = i;
    while ( j>0 & arr[j-1] > arr[j]) {
      swap(arr[j-1], arr[j]);
      j--;
    }
  }
*/


/*
  Complexities:
  Time: 
    Worst, Avg - O(n^2)
    Best - O(n)
 */



const insertionSort = (array) => {
  let n = array.length; 

  for (let i=0; i<n; i++) {
    let j = i;

    while (j > 0 && array[j-1] > array[j]) {
      swap(array, j-1, j);
      j--;
    }
  }

  return array;
}

let unSortedArray = unSortedArrays[0];

console.log("Original Array:", unSortedArray);
console.log("Sorted Array:", insertionSort(unSortedArray));