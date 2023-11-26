function minimum(array: number[], i: number): number {
  const currNode = array[i];
  const leftChild = array[2 * i + 1];
  const rightChild = array[2 * i + 2];

  if (leftChild === undefined && rightChild === undefined) {
    return currNode;
  }

  return Math.min(
    currNode,
    minimum(array, 2 * i + 1) || Infinity,
    minimum(array, 2 * i + 2) || Infinity
  );
}

const array = [2, 3, 7, 9, 1, 0, -1, 5, -2, -4];
