let longestUnivaluePath = function(root, count) { 
    if(!count) {
       let count = 0
    } 
    let node = root
    if(!node) return count
    if(!node.left && !node.right) {
         return count
    }
    if(node.val === node.left.val) {
        count += 1
        node = node.left
        longestUnivaluePath(node, count)
    } else if (node.val === node.right.val) {
        count += 1
        node = node.right
        longestUnivaluePath(node, count)
    } else if(node.val !== node.left.val && node.val !== node.right.val) {
        count += 1
        return count
    }  
};