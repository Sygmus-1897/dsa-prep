
const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const unSortedArrays = [
  [9, 3, 7, 1, 8, 4, 12,9, 15, 6, 2, 10, 14, 11, 13, 5],
  [23, 5, 18, 2, 29, 44, 11, 19, 34, 8, 3, 25, 37, 21, 10],
  [50, 13, 7, 30, 45, 28, 1, 33, 22, 8, 17, 26, 6, 39, 14],
  [12, 19, 3, 7, 21, 9, 25, 15, 14, 5, 8, 30, 2, 6, 11],
  [78, 45, 90, 12, 34, 67, 23, 9, 4, 15, 1, 87, 56, 19, 20],
  [5, 8, 1, 9, 4, 7, 11, 13, 15, 6, 10, 3, 12, 14, 2],
  [20, 15, 5, 10, 25, 14, 7, 29, 8, 12, 21, 3, 19, 6, 18],
  [13, 27, 9, 31, 22, 4, 14, 17, 23, 18, 5, 2, 30, 10, 7],
  [56, 44, 23, 89, 12, 33, 29, 5, 7, 18, 13, 9, 4, 20, 31],
  [17, 5, 9, 2, 4, 11, 14, 8, 13, 6, 3, 12, 10, 19, 7]
]

module.exports = {
  swap,
  unSortedArrays
}