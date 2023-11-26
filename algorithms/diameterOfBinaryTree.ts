// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//     }
// }

function diameterOfBinaryTree(root: TreeNode | null): number {
  return dfs(root);
}

function dfs(root: TreeNode | null, diameter = 0): number {
  if (root === null) return 1;
  diameter = diameter + Math.max(dfs(root.left), dfs(root.right));
  return diameter;
}
