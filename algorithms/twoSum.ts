const twoSum = (nums: number[], target: number):number[] => {
    interface HashTable {
        [key: number]: number;
    }
   const hashTable = {} as HashTable;
   const answer: number[]= []
   nums.forEach((num, index) => {
    const rem = target - num;
    if(hashTable[num] !== undefined){
        answer.push(hashTable[num], index);
    }
    hashTable[rem] = index;
   })
   return answer;
}

const main = () => {
    const ques = [1,2,3,8,5]
    const result = twoSum(ques, 6);
    console.log(result);
}
main()