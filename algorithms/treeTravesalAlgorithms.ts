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

function dfs(root: TreeNode | null){
    if(root === null) {
        return root;
    }
    console.log(root.val)
    dfs(root.left)
    dfs(root.right);
}

function dfsIter(root: TreeNode | null){
    if(root === null) return root;
    const stack: Array<TreeNode | null> = [root];
    while(stack.length > 0){
        const currNode = stack.pop() as TreeNode;
        console.log(currNode.val)
        if(currNode.left) stack.push(currNode.left);
        if(currNode.right) stack.push(currNode.right);
    }
}

function bfs(root: TreeNode | null){
    if(root === null) return root;
    const queue: Array<TreeNode | null> = [root];
    while(queue.length > 0){
        const currNode = queue.shift() as TreeNode;
        console.log(currNode.val)
        if(currNode.left) queue.push(currNode.left);
        if(currNode.right) queue.push(currNode.right);
    }
}
