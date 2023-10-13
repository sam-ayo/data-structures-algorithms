function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const queue: number[][] = [[sr,sc]];
    const newImage = image;
    const originalColor = image[sr][sc];
    while(queue.length > 0){
       const currentPos = queue.shift() as number[]; 
       if(isValidCell(newImage, currentPos[0], currentPos[1], originalColor, color)){
           const neighbours = [[currentPos[0]-1, currentPos[1]], 
                                [currentPos[0]+1, currentPos[1]], 
                                [currentPos[0], currentPos[1]-1], 
                                [currentPos[0], currentPos[1]+1]];
            for(let neighbour of neighbours) {
                if(isValidCell(newImage, neighbour[0], neighbour[1], originalColor, color)){
                    queue.push(neighbour);
                }
            }
           newImage[currentPos[0]][currentPos[1]] = color;
       }
    }
    return newImage;
};

function isValidCell(image: number[][], r: number, c: number, originalColor: number, newColor: number): boolean{
    const m = image.length;
    const n = image[0].length;
    if (r < 0 || c < 0 || r >= m || c >= n) return false;
    if (image[r][c] !== originalColor) return false;
    if(image[r][c] === newColor) return false;
    return true;
}