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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if(root === null) return root;
    if(p && q) {
        if(p.val >= root.val && q.val >= root.val){
            lowestCommonAncestor(root.right, p, q);
        }
        if(p.val <= root.val && q.val <= root.val){
            lowestCommonAncestor(root.left, p, q);
        }
    }
    return root;
};

const root = new TreeNode(6) ;

const two = new TreeNode(2)
const eight = new TreeNode(8)

const seven = new TreeNode(7)
const nine = new TreeNode(9)

const zero = new TreeNode(0)
const four = new TreeNode(4)

const three = new TreeNode(3)
const five = new TreeNode(5)

root.left = two;
root.right = eight;

two.left=zero
two.right=four

four.left=three;
four.right=five

eight.left=seven
eight.right=nine


const result = lowestCommonAncestor(root, zero, five)
console.log(result?.val)

