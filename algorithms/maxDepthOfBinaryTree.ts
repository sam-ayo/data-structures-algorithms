function maxDepthIterativeDfs(root: TreeNode | null): number {
    if(root === null) return 0;

    let maximumDepth = 0;
    const stack = [[root, 1]]
    while(stack.length >= 1) {
        const [currNode, currNodeDepth] = stack.pop()! as [currNode: TreeNode , currNodeDepth: number];
        if(currNode.left) stack.push([currNode.left, currNodeDepth + 1 ])
        if(currNode.right) stack.push([currNode.right, currNodeDepth + 1 ])
        maximumDepth = Math.max(maximumDepth, currNodeDepth);
    }
    return maximumDepth;
}


function maxDepthIterativeBfs(root: TreeNode | null): number{
    if(root === null) return 0;

    const queue = [[root, 1]] as [[TreeNode , number]]

    let maximumDepth = 0;

    while(queue.length >= 1){
        const [currNode, currNodeDepth] = queue.shift()!;
        if(currNode.left) queue.push([currNode.left, currNodeDepth + 1]);
        if(currNode.right) queue.push([currNode.right, currNodeDepth + 1]);
        maximumDepth = Math.max(maximumDepth, currNodeDepth);
    }

    return maximumDepth;
}

