console.log('< --------- RECURSIVE BUBBLE SORT ------------>')

const { swap, unSortedArrays } = require("../utils");

// Striver Series: https://takeuforward.org/arrays/recursive-bubble-sort-algorithm/

/* 
  Algo:
  1. Check for the array size N to 0 
  2. Start from 0, check for curr elem being greater than next elem
  3. if yes, swap. check next pair. repeat till N
  3. once reached N, repeat step 1 for array size N-1 to 0
  4. array will be sorted from end to start
*/

/* 
  Pseudo Code:
  sort (array, n) {
    if (n <= 1) return // base case
    for (j -> 0 to n-1) {
      if (arr[j] > arr[j+1]) {
        swap(arr[j], arr[j+1])
      }
    }
    sort(array, n-1)
  }
*/


/*
  Complexities:
  Time: 
    Worst, Avg - O(n^2)
    Best - O(n) -with Optimisation
  Space: 
    O(n^2) - Stack Space (Because Recursion)
 */



const recursiveBubbleSort = (array, n) => {

  if (n <= 1) return;

  let didSwap = 0;

  for (let i=0; i<n-1; i++) {
    if (array[i] > array[i+1]) {
      swap(array, i, i+1);
      ++didSwap;
    }
  }

  if (didSwap == 0) return;

  recursivebubbleSort(array, n-1);
}

let unSortedArray = unSortedArrays[0];

console.log("Original Array:", unSortedArray);
recursiveBubbleSort(unSortedArray, unSortedArray.length)
console.log("Sorted Array:", unSortedArray);