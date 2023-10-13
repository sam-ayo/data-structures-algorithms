const productExceptSelf = (nums: number[]):number[] => {
    const left:number[] = [1];
    const right:number[] = [1];
    for (let i = 1; i<nums.length; i++){
        const currIndex = nums.length - 1 - i;
        left.push(nums[i-1] * left[i-1]);
        right.push(nums[currIndex+1] * right[i-1]) 
    }
    const answer: number[] = [];
    for (let i =0; i< nums.length; i++){
       answer.push(left[i] * right[nums.length-1-i]) 
    }
    return answer;
}


const nums = [1,2,3,4];
const result = productExceptSelf(nums);
console.log(result);
