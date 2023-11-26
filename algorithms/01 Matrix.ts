function updateMatrix(mat: number[][]): number[][] {
  let prevMat = mat;

  let distanceMat: number[][] = initializeNodesToUnvisited(mat);

  // console.log(prevMat);

  for (let m = 0; m < mat.length; m++) {
    for (let n = 0; n < mat[0].length; n++) {
      const currNode = mat[m][n];
      console.log(currNode);
      if (currNode === 0) {
        distanceMat[m][n] = 0;
      } else {
        const distance = nearestZeroRecursion(m, n, mat, distanceMat);
        distanceMat[m][n] = distance;
      }
    }
  }
  return Array.from(distanceMat);
}

function initializeNodesToUnvisited(mat: readonly number[][]) {
  const newMat = [...mat];
  for (let m = 0; m < newMat.length; m++) {
    for (let n = 0; n < newMat[0].length; n++) {
      newMat[m][n] = -1;
    }
  }
  return newMat;
}

function nearestZeroRecursion(
  m: number,
  n: number,
  mat: number[][],
  distanceMat: readonly number[][]
): number {
  const currNode = [m, n];
  if (!isValidNode(currNode, mat)) {
    return Infinity;
  }
  if (mat[m][n] === 0) {
    return 1;
  }

  const neighbours = getNeighbours(m, n, mat).filter(
    (neighbour) => !isVisited(neighbour, distanceMat)
  );

  // console.log(neighbours);
  const distances = neighbours.map((neighbour) => {
    const [mNeighIndex, nNeighIndex] = neighbour;
    return 1 + nearestZeroRecursion(mNeighIndex, nNeighIndex, mat, distanceMat);
  });

  return Math.min(...distances);
}

function isVisited(
  neighbour: number[],
  distancesMat: readonly number[][]
): boolean {
  const [m, n] = neighbour;
  if (distancesMat[m][n] === -1) {
    return false;
  }
  return true;
}

function getNeighbours(
  mi: number,
  ni: number,
  distancesMat: readonly number[][]
) {
  const up = [mi - 1, ni];
  const down = [mi + 1, ni];
  const left = [mi, ni - 1];
  const right = [mi, ni + 1];

  const validNeighbours = [up, down, left, right].filter((neighbour) =>
    isValidNode(neighbour, distancesMat)
  );

  return validNeighbours;
}

function isValidNode(node: number[], distancesMat: readonly number[][]) {
  const [m, n] = node;
  if (m <= mat.length - 1 && n <= mat[0].length - 1 && m >= 0 && n >= 0) {
    return true;
  }
  return false;
}

function nearestZero(m: number, n: number, mat: number[][]): number {
  const queue: number[][] = [[m, n]];

  let distance = 1;
  while (queue.length > 0) {
    const [mi, ni] = queue.shift()!;
    const neigbours = getNeighbours(mi, ni, mat);
    for (let neighbour of neigbours) {
      const [mNeighIndex, nNeighIndex] = neighbour;
      if (mat[mNeighIndex][nNeighIndex] === 0) {
        return distance;
      }
      queue.push(neighbour);
    }
    distance++;
  }
  return distance;
}

const mat = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];
updateMatrix(mat);
