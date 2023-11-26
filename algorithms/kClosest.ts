function kClosest(points: number[][], k: number): number[][] {
  const pointsDistances: number[][] = [];
  for (let i = 0; i < points.length; i++) {
    const origin = [0, 0];
    const distanceToOrigin = euclideanDistance(points[i], origin);
    pointsDistances.push([...points[i], distanceToOrigin]);
  }
  const sortedPointDistances = bubbleSort(pointsDistances);
  const kClosestPoints = selectKClosest(sortedPointDistances, k);
  return kClosestPoints;
}

function selectKClosest(
  sortedPointsDistance: readonly number[][],
  k: number
): number[][] {
  const newArray = [];
  for (let i = 0; i < k; i++) {
    const [x, y, distance] = sortedPointsDistance[i];
    newArray.push([x, y]);
  }
  return newArray;
}

function heapSort(pointsDistances: readonly number[][]): number[][] {
  const newPointsDistances = Array.from(pointsDistances);
  return newPointsDistances;
}

function bubbleSort(pointsDistances: readonly number[][]): number[][] {
  const newPointsDistances = Array.from(pointsDistances);
  for (let i = 0; i < newPointsDistances.length - 1; i++) {
    for (let j = 0; j < newPointsDistances.length - 1 - i; j++) {
      const [, , distance] = newPointsDistances[j];
      const [, , next] = newPointsDistances[j + 1];
      if (distance > next) {
        const temp = newPointsDistances[j];
        newPointsDistances[j] = newPointsDistances[j + 1];
        newPointsDistances[j + 1] = temp;
      }
    }
  }
  return newPointsDistances;
}

function euclideanDistance(
  point1: readonly number[],
  point2: readonly number[]
): number {
  const [x1, y1] = point1;
  const [x2, y2] = point2;

  const xDist = Math.pow(x1 - x2, 2);
  const yDist = Math.pow(y1 - y2, 2);

  return Math.sqrt(xDist + yDist);
}
