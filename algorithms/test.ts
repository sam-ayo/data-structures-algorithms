// check if m and n are validIndices

function isValidNeighbour(neighbour: number[], mat: number[][]) {
  const [m, n] = neighbour;
  if (m <= mat.length - 1 && n <= mat[0].length - 1 && m >= 0 && n >= 0) {
    return true;
  }
  return false;
}

function getMinDistance(m: number, n: number, mat: number[][]): number {
  //get neighbours
  if (mat[m][n] === 0) {
    return 1;
  }
  if (!isValidNeighbour([m, n], mat)) {
    return 0;
  }
  const up = [m - 1, n];
  const down = [m + 1, n];
  const left = [m, n - 1];
  const right = [m, n + 1];

  const neighbours = [up, down, left, right];
  //check neighbours m and n values to see if validIndices

  const allDistances = [];
  for (let neighbour of neighbours) {
    const [mi, ni] = neighbour;
    allDistances.push(1 + getMinDistance(mi, ni, mat));
  }
  //   return Math.min(...allDistances);

  if (mat[m][n] === 0) {
    return 1;
  }
  // check if m and n are validIndices
  // if m and n are NOT validIndice
  return 0;
}
