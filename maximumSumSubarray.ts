const maxSubArray = (nums: number[]):number => {
    let maxSum = 0;
   for(let i = 0; i<nums.length; i++){
    for(let j = i; j < nums.length; j++){
        let currSum = 0;
        for(let k = i; i<j; k++ ){
           currSum = currSum + nums[k] 
           if(currSum > maxSum){
            maxSum = currSum;
           }
        }
    }
   } 
   return maxSum;
}

const main = () => {
    const list = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    const result = maxSubArray(list);
    console.log(result);
}

main()