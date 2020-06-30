var invertTree = function(root) {
    if(root === null) return null
    let rightChild = invertTree(root.right)
    let leftChild = invertTree(root.left)
    root.right = leftChild
    root.left = rightChild
       
    return root
};