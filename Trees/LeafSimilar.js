function getTheLeaves(root, leaves) { 
    if(!root.right && !root.left) {
        leaves.push(root)
    } 

    if(root.right) {
        getTheLeaves1(root.right)
    } 

    if(root.left) {
        getTheLeaves1(root.left)
    }
}

var leafSimilar = function(root1, root2) {
    let leaf1 = []
    let leaf2 = []
        
    getTheLeaves(root1, leaf1)
    getTheLeaves(root2, leaf2)
    
    if(leaf1.length !== leaf2.length) return false
    
    for(let i = 0; i < leaf1.length -1; i++) {
        if(leaf1[i].val !== leaf2[i].val) return false  
    }
    
    return true  
};