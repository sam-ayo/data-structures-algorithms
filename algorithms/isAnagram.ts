const isAnagram = (s: string, t: string): boolean => {
    if(s.length !==  t.length) return false;
    interface HashTable {
        [key: string]: number;
    }
    const sHashTable = {} as HashTable;
   for (let c of s ) {
       if(sHashTable[c]){
            const newValue = sHashTable[c] + 1;
            sHashTable[c] = newValue;
       }else{
        sHashTable[c] = 1;
       }
   }
   for(let c of t){
    if(sHashTable[c]){
        const newValue = sHashTable[c] - 1;
        sHashTable[c] = newValue;
    }else{
        return false;
    }
   }
   return true;
}