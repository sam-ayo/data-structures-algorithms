function hourglassSum(arr: number[][]): number {
    let max = -Infinity;
    for(let i = 1; i< arr.length-1; i++){
        for(let j = 1; j< arr[0].length-1; j++){
            const self = arr[i][j];
            let total = self;
            for(let x=-1; x<2; x++){
                total += arr[i-1][j-x]
                total += arr[i+1][j-x]
            }
            // const top = arr[i-1][j] //
            // const bottom = arr[i+1][j]

            // const leftTop = arr[i-1][j-1] //
            // const rightTop = arr[i-1][j+1] //

            // const leftBottom = arr[i+1][j-1]
            // const rightBottom = arr[i+1][j+1]
            
            // const total = self + top + bottom + leftTop + rightTop + leftBottom + rightBottom ;
            
            max = Math.max(total, max);
        }
    }
    
    return max;
}