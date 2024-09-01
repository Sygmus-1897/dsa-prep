console.log('< --------- MERGE SORT ------------>')

const { unSortedArrays } = require("../utils");


// Striver Series: https://youtu.be/ogjf7ORKfd8

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
  Space: 
    O(n) - Temp. array used to store sorted sub array
 */




const mergeSort = (array) => {
  divide(array, 0, array.length-1);
}

const divide = (array, start, end) => {
    // base case
  if (start >= end) {
    return;
  }

  let mid = Math.floor((start+end)/2);

  divide(array, start, mid);
  divide(array, mid+1, end);
  merge(array, start, mid, end);
}

const merge = (array, start, mid, end) => {
  let left = start;
  let right = mid+1;

  let newArray = [];
  
  while(left <= mid && right <= end) {
    if (array[left] < array[right]) {
      newArray.push(array[left]);
      left++;
    }
    else {
      newArray.push(array[right]);
      right++;
    }
  }

  while (left <= mid) {
    newArray.push(array[left]);
    left++;
  }

  while (right <= end) {
    newArray.push(array[right]);
    right++;
  }

  for(let i=start; i<=end; i++) {
    array[i] = newArray[i-start];
  }
}

let unSortedArray = unSortedArrays[0];

console.log("Original Array:", unSortedArray);
mergeSort(unSortedArray)
console.log("Sorted Array:", unSortedArray);