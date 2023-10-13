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

// function isSameTree(p: TreeNode | null, saq: TreeNode | null): boolean{
//     if(!p && q || p && !q) return false;
//     if(p && q){
//         if(p.val !== q.val) return false;
//         return isSameTree(p.left, q.left) && isSameTree(p.right, q.right) && p.val === q.val;
//     }
//     return true;
// }

// Use BFS
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean{
   const pQueue = [p];
   const qQueue = [q];
   while(pQueue.length >= 1 || qQueue.length >= 1) {
       const pCurr = pQueue.shift();
       const qCurr = qQueue.shift();
       if(!pCurr && qCurr || pCurr && !qCurr) return false;
       if(pCurr && qCurr){
           if(pCurr.val !== qCurr.val) return false;
       }
       if(pCurr) {
           pQueue.push(pCurr.left);
           pQueue.push(pCurr.right);
       }
       if(qCurr) {
           qQueue.push(qCurr.left)
           qQueue.push(qCurr.right)
       }
   }
   return true;
}