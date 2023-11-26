function canConstruct(ransomNote: string, magazine: string): boolean {
    if(ransomNote.length > magazine.length) return false;
    
    const hashTable = {}

    for(let letter of magazine){
        if(hashTable[letter]) hashTable[letter] = hashTable[letter] + 1;
        else {
            hashTable[letter] = 1
        }
    }
    
    for(let letter of ransomNote) {
        if(hashTable[letter] > 0) hashTable[letter] = hashTable[letter] - 1;
        else return false;
    }

    return true;
    
};