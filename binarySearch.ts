function search(nums: number[], target: number): number {
    let startIndex = 0
    let endIndex = nums.length - 1;
    while(startIndex <= endIndex){
        const midIndex = Math.floor((startIndex + endIndex)/2);
        if(nums[midIndex] === target) return midIndex;
        else if(nums[midIndex] < target)  startIndex = midIndex + 1 ;
        else endIndex = midIndex - 1
    }
    return -1;
};
