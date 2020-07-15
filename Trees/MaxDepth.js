const maxDepth = (root) => {
    let maxDepth = 0    
    let BFS = (node, level) => {
        if(node === null) return 0
        if(level > maxDepth) maxDepth = level
        BFS(node.left, level + 1)
        BFS(node.right, level + 1)
    }
    BFS(root, 1)
    return maxDepth
};

