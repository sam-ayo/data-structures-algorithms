function addBinary(a: string, b: string): string{
    const numOfIterations = Math.max(a.length, b.length);
    let sum = '';
    let rem = 0;
    for(let i = 0; i<numOfIterations; i++){
       const currA = parseInt(a[a.length-1-i]) || 0 ; 
       const currB = parseInt(b[b.length-1-i]) || 0;

       const currSum = currA + currB + rem;

        rem = Math.floor(currSum / 2);
       
       const actualSum = currSum % 2;
       
       sum = `${actualSum}` + sum;
    }
    if(rem === 1) sum = '1' + sum;
    
    return sum
    
}