
function updateMatrix(mat: number[][]): number[][] {
    for(let i=0; i<mat.length; i++){
        for(let j=0; j<mat[i].length; j++){
            
        }
    }

};

const queue = [[0,0]];
while(queue.length > 0){
  const [i, j] = queue.shift() as number[];
  const neighbours = [] as number[][] 
  
  if(isValidNeighbour(mat, i-1, j)) queue.push([i-1, j])
  if(isValidNeighbour(mat, i, j-1)) queue.push([i, j-1])
  if(isValidNeighbour(mat, i, j+1)) queue.push([i, j+1])
  if(isValidNeighbour(mat, i+1, j)) queue.push([i+1, j])
}

function isValidNeighbour(mat: number[][], i: number, j: number): boolean{
    const m = mat.length;
    const n = mat[0].length;
   if(i < 0 || j < 0 || i>=m || j>=n) {
       return false
   } 
   return true;
}