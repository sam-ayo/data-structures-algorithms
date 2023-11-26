// Use a bitwise & 
function hammingWeight(n: number): number{
    let countOnes = 0;
    while(n!==0){
      if(n&1) countOnes += 1;  
      n = n>>1;
    }
    return countOnes;
}