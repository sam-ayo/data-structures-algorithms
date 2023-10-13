// Given a sorted array of integer numbers and a target value. 
// Return the indexes of the two numbers that sum up to the target.
// Return -1,-1 if there's no sum.

function twoSumSorted(arr: number[], target: number): number[] {
    let i = 0;
    let j = arr.length - 1;
    for(let num of arr){
        const sum = arr[i] + arr[j]; 
        if(sum === target) return [i, j];
        if(sum > target) j = j + 1;
        if(sum < target) i = i + 1; 
   } 
   return [-1, -1]
}
