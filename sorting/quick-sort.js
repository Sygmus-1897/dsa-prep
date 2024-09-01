console.log('< --------- QUICK SORT ------------>')

const { unSortedArrays, swap } = require("../utils");


// Striver Series: https://youtu.be/WIrA4YexLRQ

/* 
  Algo:
  1. call quickSort - if start>end - END, else:
  2. pick a pivot elem (can be 1st, last or random elem)
  3. put it in correct place (using two pointers and swapping method)
  4. recursively call QuickSort for left half
  5. recursively call QuickSort for right half
  6. array will be sorted
*/

/* 
  Pseudo Code:
  quickSort(arr, start, end) {
    if (start >= end) return;
    pivotIdx = partition(arr, start, end);
    quickSort(arr, start, pivotIdx-1);
    quickSort(arr, pivotIdx+1, end);
  }

  partition(arr, start, end) {
    pivotElem = arr[start] // picking 1st elem as pivot
    i = start+1 & j = end

    while (i<j) {
      while(arr[i] >= pivotElem && i<end) i++; // check if element of left index is greater than pivot, if so move left index (will make sense while swapping)
      while(arr[j] < pivotElem && j>start) j--;
      if (i<j) swap(arr, i, j) // greater element goes to right half of array, small element goes left half of array.
    }
    swap(arr, j, start) // pivot goes to its correct place
    return j; // our pivot index
  }
*/


/*
  Complexities:
  Time: 
    O(nlogn)
  Space: 
    O(1)
 */


const partition = (array, start, end) => {
  let pivotElem = array[start];
  let i = start + 1; // to avoid checking pivot against itself
  let j = end;

  while (i < j) {
    // array[i] <= pivotElem --- keeps the duplicate element on left
    while (array[i] <= pivotElem && i < end) i++;
    
    // array[j] >=  pivotElem --- keeps the duplicate element on right
    while (array[j] > pivotElem && j > start) j--;

    if (i < j) swap(array, i, j);
  }

  swap(array, j, start);

  return j;
}

const quickSort = (array, start, end) => {
  if (start >= end) return;
  
  let pivot_idx = partition(array, start, end);
  quickSort(array, start, pivot_idx-1);
  quickSort(array, pivot_idx+1, end);
}

let unSortedArray = unSortedArrays[0];

console.log("Original Array:", unSortedArray);
quickSort(unSortedArray, 0, unSortedArray.length-1);
console.log("Sorted Array:", unSortedArray);