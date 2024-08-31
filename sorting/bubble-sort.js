console.log('< --------- BUBBLE SORT ------------>')

const { swap, unSortedArrays } = require("../utils");

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
  for (i -> N to 0) {
    for (j -> 0 to i) {
      if (arr[j] > arr[j+1]) {
        swap(arr[j], arr[j+1])
      }
    }
  }
*/


/*
  Complexities:
  Time: 
    Worst, Avg - O(n^2)
    Best - O(n) -with Optimisation
 */



const bubbleSort = (array) => {
  let n = array.length; 

  for (let i=n; i>0; i--) {

    let didSwap = 0;
    for (let j=0; j<i; j++) {
      if (array[j] > array[j+1]) {
        swap(array, j, j+1);
        ++didSwap;
      }
    }
    if (!didSwap) break;
  }

  return array;
}

let unSortedArray = unSortedArrays[0];

console.log("Original Array:", unSortedArray);
console.log("Sorted Array:", bubbleSort(unSortedArray));