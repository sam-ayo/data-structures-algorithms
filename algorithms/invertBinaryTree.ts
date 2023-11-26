class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function invertTreeDfsIterative(root: TreeNode | null): TreeNode | null {
    if(root === null) return root;
    const stack: Array<TreeNode | null> = [root];
    while(stack.length > 0){
        const currNode = stack.pop() as TreeNode;

        const left = currNode.left;
        const right = currNode.right;
        currNode.left =  right;
        currNode.right = left;

        if(currNode.right) stack.push(currNode.right);
        if(currNode.left) stack.push(currNode.left);
    }
    return root
}

function invertTree(root: TreeNode | null): TreeNode | null {
    if(root === null) return root;
    const queue: Array<TreeNode | null> = [root];
    while(queue.length > 0){
        const currNode = queue.shift() as TreeNode;

        const left = currNode.left;
        const right = currNode.right;
        currNode.left =  right;
        currNode.right = left;

        if(currNode.left) queue.push(currNode.left);
        if(currNode.right) queue.push(currNode.right);
    }
    return root
}

function invertTreeDfsRecursion(root: TreeNode | null): TreeNode | null {
  if(root === null) return root;

  const left = root.left;
  const right = root.right;

  root.left =  invertTreeDfsRecursion(right)
  root.right = invertTreeDfsRecursion(left)

  return root;
}

;


