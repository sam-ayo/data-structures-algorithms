// https://leetcode.com/problems/backspace-string-compare/ 

// I think two pointers technique can be used to solve this. 
function backspaceCompare(s: string, t: string): boolean {
    let i = s.length - 1;
    let j = t.length - 1;
    
    const backspace = '#';

    while(i > 0 || j > 0){

       if(s[i] === backspace){
           let numToSkip = 1;
           while(numToSkip > 0) {
               i--;
               if(s[i] === backspace) numToSkip++;
               else numToSkip--;
           }
       }
       
       if(t[j] === backspace) {
        let numToSkip = 1;
        while(numToSkip > 0) {
            j--;
            if(t[j] === backspace) numToSkip++;
            else numToSkip--;
        }
       }

       if(s[i] !== t[j]) return false
       i--;
       j--;
    }

    return true;
};