function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    return recursion(image, image[sr][sc], sr, sc, color)
}

function recursion(image: number[][], prevColor: number, sr: number, sc: number, color: number){
    if((image[sr][sc] === prevColor)){
       image[sr][sc] = color 
    }
    isBound(image, sr-1, sc) && recursion(image, prevColor, sr-1, sc, color)
    isBound(image, sr+1, sc) && recursion(image, prevColor, sr+1, sc, color)
    isBound(image, sr, sc-1) && recursion(image, prevColor, sr, sc-1, color)
    isBound(image, sr, sc+1) && recursion(image, prevColor, sr, sc+1, color)
    
    return image;
}

function isBound(image: number[][], sr: number, sc: number){
    const m = image.length;
    const n = image[0].length;
    if(sr>=m || sr<0 || sc>=n || sc<0) return false;
    if(sr>=0 && sr<m || sc>=0 && sc<n) return true;
    return false;
}
