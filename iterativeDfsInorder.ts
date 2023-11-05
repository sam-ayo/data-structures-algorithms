function dfsIterativeInorder(root: TreeNode | null): number[]{
    const nodeVals: number[] = []
    if(root === null) return nodeVals;

    const stack = [root]
    let node: TreeNode | null = root
    while(stack.length >= 1) {
        if(node !== null){
            if(node.left) stack.push(node.left)
            node = node.left;
        }else{
            node = stack.pop()!
            nodeVals.push(node.val);
        }
    }
    return nodeVals
}

