interface HashTable {
    [key: number]: string[];
}
function groupAnagrams(strs: string[]):string[][]{
    const hashTable = {} as HashTable
    let count = 0;
    for(let word of strs){
        const newWord = word.split("");
        if(!hashTable[count]) hashTable[count] = newWord
        else {
            for(let value of Object.values(hashTable)){
                // compare two arrays
                // two forloops again? 
                let checkEqual  = true;
                for(let i=0; i<value.length; i++){
                    for(let j=0; j<word.length; j++){
                        if(value[i] !== word[j]) checkEqual = false 
                    }
                }
                if(checkEqual) 
            }
        }
        count++;
    }
}
{
    1: [eat],
    2: [tan]
}