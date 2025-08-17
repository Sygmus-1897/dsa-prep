let input = [3, 0, 1, 0, 2]//[3, 0, 1, 0, 4, 0, 4, 0, 2]

let left_max = input[0];
let right_max = input[input.length-1];

let left_idx = 1;
let right_idx = input.length-2;
let total = 0;

while (left_idx<=right_idx) {
  if (input[left_idx] > left_max) {
    left_max = input[left_idx];
  }
  if (input[right_idx] > right_max) {
    right_max = input[right_idx];
  }
  
  if (left_max < right_max) {
    total += left_max - input[left_idx];
    left_idx++;
  }
  else {
    total += right_max - input[right_idx];
    right_idx--;
  }
}

console.log(total);