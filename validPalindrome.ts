// function isPalindrome(s: string): boolean {
//     let firstIndex = 0
//     let secondIndex = s.length-1
//     while(firstIndex <= secondIndex){
//         const first = s[firstIndex].toLowerCase()
//         const second = s[secondIndex].toLowerCase()
//         const isFirstValid = isAlphaNumeric(first)
//         const isSecondValid = isAlphaNumeric(second)

//         if(isFirstValid && isSecondValid  && first !== second){
//             return false;
//         } 

//         if (!isFirstValid && isSecondValid){
//             firstIndex++;
//             continue;
//         }

//         if (isFirstValid && !isSecondValid){
//            secondIndex--; 
//            continue;
//         }
//         firstIndex++;
//         secondIndex--;
//     }
//     return true;
// }
function isPalindrome(s: string): boolean{
    let firstIndex = 0;
    let secondIndex = s.length-1;
    while(firstIndex < secondIndex){
        console.log(firstIndex, secondIndex)
        while(!isAlphaNumeric(s[firstIndex])){
            firstIndex++
        }
        while(!isAlphaNumeric(s[secondIndex])){
            secondIndex--
        }
        if(isAlphaNumeric(s[firstIndex]) && isAlphaNumeric(s[secondIndex]) && s[firstIndex].toLowerCase() !== s[secondIndex].toLowerCase()){
            return false;
        }
        firstIndex++;
        secondIndex--;
        console.log(firstIndex, secondIndex)
    }
    return true;
}

function isAlphaNumeric(char: string): boolean{
    const asciiCode = char.charCodeAt(0)
    return (asciiCode >= 97 && asciiCode <= 122) || (asciiCode >= 48 && asciiCode <= 57);
}
