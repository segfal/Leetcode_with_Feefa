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
            average = nums[i-k]; // This is not moving the window look at max_sum.js to correct this
            maxSum = Math.max(average) // what are we comparing?
        } 
        console.log(maxSum) /// 
        return maxSum;
    
    };
    
    
    k=4
    // 12.75000
    findMaxAverage([1,12,-5,-6,50,3],4)


    /**
     * Solution sliding window
     * 
     */
    const correctSolution = (nums,k) => {

     let average = nums.slice(0,k).reduce((a,b) => a+b);
     let maxSum = average;

     for(let i=k;i<nums.length;i++){
        average += nums[i] - nums[i-k]; // This is moving the window
        maxSum = Math.max(average,maxSum); // This is comparing the maxSum
     }
     return maxSum/k;
    }

    correctSolution([1,12,-5,-6,50,3],4)
    