function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const queue: number[][] = [[sr,sc]];
    const initialColor: number = image[sr][sc];
    while(queue.length > 0){
        const [x, y] = queue.shift() as number[]
        if(initialColor === image[x][y]){
            image[x][y] = color
        }
        const neighbours = [[x-1,y], [x+1, y], [x, y-1], [x, y+1]];
        for(let neighbour of neighbours){
            const [neighbourX, neighbourY] = neighbour;
            if(isValid(image, neighbourX, neighbourY ) && color !== image[neighbourX][neighbourY] && initialColor === image[neighbourX][neighbourY]){
                queue.push([neighbourX, neighbourY]);
            }
        }
    }
    return image;
};

function isValid(image: number[][], sr: number, sc: number){
    const m = image.length;
    const n = image[0].length;

    if(sr>=m || sr<0 || sc>=n || sc<0){
        return false;
    }
    if(sr>=0 && sr < m || sc>=0 && sc<n) return true;
    return false;
}