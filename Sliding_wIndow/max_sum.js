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






