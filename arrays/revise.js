// https://youtu.be/frf7qxiN2qU

/**

1. Longest subarray with sum K (Positives + Negatives)
  - Better: Using PrefixSum method, and Hashmap
  - Optimal: Two Pointers from start, if sum greater, move left one if smaller, move right one


2. 2 Sum Problem
  - Approach
    - Better: Hashmap and target-current = potential item in hasmap
    - Optimal: Sort array, two pointer, start++ and end--

3. Sort 0,1,2's array
  - Better: count each value and override yourself
  - Optimal: Dutch National Flag Algo
    - DNF: 3 pointer algo, low, mid, high (https://youtu.be/tp8JIuCXBaU)
      0 -- low -- mid -- high -- n

      starting low, mid = 0, high = n
       arr[mid] === 0 -> low++, mid++
       arr[mid] === 1 -> mid++
       arr[mid] === 2 -> high--

4. Majority Element (>n/2 times)
  - Better: Hashmap to keep count
  - Optimal: Moore's Voting Algo (kind iffi: https://youtu.be/nP_ns3uSh80)
    - pick el, do loop, if same el, cnt++, else cnt--
    - if cnt=0, pick next el, 
    - by the end, check el's count in another loop

5. Maximum Subarray Sum 
  - Better: O(n^2) loop 
  - Optimal: Kadane's Algo, 
    - sum=0, max=arr[0]
    - if sum -ve, keep it 0
    - update max for each sum

6. Print Subarray of above problem
  - if sum =0 store start=i
  - while updating max, update ansStart=start and ansEnd=i

7. Stock Buy/Sell https://youtu.be/excAOvwF_Wk

8. Next Permutation (https://youtu.be/JDOXKqF60RQ)
  - optimal soln:
    - [2,1,5,4,3,0,0]
    - find the first dip from right, a[i] < a[i+1] and store index
    - swap first greater el. with the ind
    - reverse arr from dip to n
    - if no dip, reverse the arr

9. Longest Consecutive Sequence (iffi)

10. Set Matrix Zeros
  - Brute: mark -1
  - Better: mark rows and cols
  - Optimal: use matrix for rows and cols arr 

11. Rotate Matrix by 90*
  - Transpose -> Reverse every row

12. Print Matrix in spiral
  - Run for top, right, bottom, left
  - for right and left, there will be edge case checks, 

13. Pascal Triangle (https://youtu.be/bR7mQgwQ_o8)
  - Using nCr formula
  - Optimising nCr Formula
  


Maximum width of a Binary Tree




*/

