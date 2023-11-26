function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const queueForTraversing: number[][] = [[sr,sc]]
    const initColor = image[sr][sc];

    while(queueForTraversing.length > 0) {
        const [x, y] = queueForTraversing.shift() as number[]

        image[x][y] = color

        const neighbours = [[x-1, y], [x+1, y], [x,y-1], [x,y+1]]
        for(let neighbour of neighbours){
            const [neighX, neighY] = neighbour
            if(isInBound(image, neighbour, color) && initColor === image[neighX][neighY]){
                queueForTraversing.push(neighbour)
            }
        }
    }
    return image
};

function isInBound(image: number[][], node: number[], color: number): boolean{
    const m = image.length;
    const n = image[0].length;
    const [sr, sc] = node;
    // if out of bounds
    if(sr>m || sc>n || sr<0 || sc<0){
        return false;
    }
    // if in bound
    if(sr < m && sr >= 0 && sc < n && sc >= 0){
        if(image[sr][sc] === color) return false // node has been visited
        else return true;
    }
    return false;
}