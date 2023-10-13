const isUnique = (str: string): boolean => {
   const len = str.length; 
   for (let i=0; i< len; i++){
        for(let j = i+1; j < len; j++){
            if (str[i] === str[j]) return false
        }
   }
   return true
}


const answer = isUnique('abcdefgh')
console.log(answer);