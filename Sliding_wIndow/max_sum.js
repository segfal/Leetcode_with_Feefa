let array = [1,2,3,4,5]

k=1

let currSum = array.slice(0,k).reduce((a,b) => a+b);// base case
let maxSum = currSum;

for(let i=k;i<array.length;i++){ //Move window
    currSum += array[i];
    currSum -= array[i-k];
    maxSum = Math.max(currSum,maxSum);
    
}

console.log(maxSum)





/*

643. Maximum Average Subarray I
Solved
Easy
Topics
Companies
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and 
return this value.



Any answer with a calculation error less than 10-5 will be accepted. <--- dont worry about this

 

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000

https://leetcode.com/problems/maximum-average-subarray-i/


*/




/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
//looking for the maximum average subarray

/*  12 , 1, 2, 4, 11
    15/3

    the k tells u how long the subarray should be
    nums is the array

    we need the slice to get from one element to another the sliding window way
    and then after we calculate k elements, 
    then we want to move on from the past elements
    and subtract them so we dont keep adding those values

    -average variable, maximum variable

    we wanna go through the array until k elements and
        - find the average and then work on finding the maximum average
*/
    let average = nums.slice(0, k).reduce((a,b) => a+b);
    let maxSum=average;
    
    for (let i = k; i<nums.length; i++){
        average += parseFloat(nums[i]) / parseFloat(k);
        average = nums[i-k];
        maxSum = Math.max(average)
    } 
    console.log(maxSum) /// 
    return maxSum;

};


k=4
// 12.75000
findMaxAverage([1,12,-5,-6,50,3],4)