console.log('< --------- MERGE SORT ------------>')

const { unSortedArrays } = require("../utils");


// Striver Series: https://youtu.be/ogjf7ORKfd8

/* 
  Algo:
  1. Break the array into two halves (by indexes, we are not actually making new array here. (start+end)/2) 
  2. First recursively call for left half of the array i.e. mergeSort(array, start, mid);
  3. Then recursively call for right half of the array i.e. mergeSort(array, mid+1, end);
  4. Break down till we have 1 element, i.e. start>=end
  5. Now merge two halves in sorted manner into a new temp. array
  6. Update actual array with new temporary sorted array
  7. the array is sorted
*/

/* 
  Pseudo Code:
  mergeSort (arr, start, end) {
    if (start >= end) return; // baseCase
    mid = (start+end)/2
    mergeSort(arr, start, mid);
    mergeSort(arr, mid+1, end);
    merge(arr, start, mid, end);
  }

  merge(arr, start, mid, end){
    left=start, right=mid+1;
    tempArr = []
    while(left <= mid && right <= end) {
      if(arr[left] < arr[right]) tempArr.push(arr[left]) AND left++;
      else tempArr.push(arr[right]) AND right++;
    }

    // for leftovers
    while (left <= mid) tempArr.push(arr[left]) AND left++;
    while (right <= end) tempArr.push(arr[right]) AND right++;

    // update actual array
    for (i -> START to END) {
      arr[i] = tempArr[i-start];
    }
  }
*/


/*
  Complexities:
  Time: 
    Worst, Best, Avg - O(nlogn)
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