console.log('< --------- SELECTION SORT ------------>')

const { swap, unSortedArrays } = require("../utils");


/* 
  Algo:
  1. start i from 0 
  2. find smallest elem
  3. swap smallest elem to ith place. Now starting subset is sorted
  4. move i+1
  5. repeat step 2 till i<n-1
  6. the array is sorted
*/

/* 
  Pseudo Code:
  for (i -> 0 to N-1) {
    min_idx = i;
    for (j -> i to N) {
      if (arr[j] < arr[min_idx]) 
        min_idx = j;
    }
    swap(i, min_idx);
  }
*/


/*
  Complexities:
  Time: 
    Worst, Best, Avg - O(n^2)
 */


const selectionSort = (array) => {
  let n = array.length; 

  for (let i=0; i<n-1; i++) {
    let min_elem_idx = i;
    for (let j=i+1; j<n; j++) {
      if (array[j] < array[min_elem_idx]) {
        min_elem_idx = j;
      }
    }
    swap(array, i, min_elem_idx);
  }

  return array;
}

let unSortedArray = unSortedArrays[0];

console.log("Original Array:", unSortedArray);
console.log("Sorted Array:", selectionSort(unSortedArray));