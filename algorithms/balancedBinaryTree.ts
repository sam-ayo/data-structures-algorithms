import { TreeNode } from "./Tree";

function isBalanced(root: TreeNode | null): boolean {
    if(root === null) return true;

    if(Math.abs(height(root.left)-height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)){
        return true;
    }else{
        return false;
    }
};

function height(root: TreeNode | null): number{
    if(root === null) return 0
    return Math.max(height(root.left), height(root.right)) + 1
}