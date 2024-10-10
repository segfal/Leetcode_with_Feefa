const maxSum = (array,k) => {
    let currSum = array.slice(0,k).reduce((a,b) => a+b);// base case
    let maxSum = currSum;

    for(let i=k;i<array.length;i++){ //Move window
        currSum += array[i]; // This is adding the new element to the window
        currSum -= array[i-k]; // This is removing the oldest element from the window
        maxSum = Math.max(currSum,maxSum); // This is comparing the maxSum
    }
    return maxSum;
}

maxSum([1,2,3,4,5],1)
maxSum([1,4,2,10,23,3,1,0,20],4)
maxSum([-3,4,0,-2,6,-1],2)
maxSum([8,5,7,1,4,7,6,5,8,1],3)