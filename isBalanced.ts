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


function isBalanced(root: TreeNode | null): boolean {
    if(root === null) return 
};

function calcHeight(root: TreeNode | null): number {
    if(root === null) return 0;

    const heightDiff = calcHeight(root.left) - calcHeight(root.right); 

    if(heightDiff > 1) return -1;
}