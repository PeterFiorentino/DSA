var leafSimilar = function(root1, root2) {
    let leaf1 = []
    let leaf2 = []
    
    function getTheLeaves1(node1) { 
        if(!node1.right && !node1.left) {
            leaf1.push(node1)
        } 

        if(node1.right) {
            getTheLeaves1(node1.right)
        } 

        if(node1.left) {
            getTheLeaves1(node1.left)
        }
    }
    
    function getTheLeaves2(node2) {
          if(!node2.right && !node2.left) {
                leaf2.push(node2)
            } 
            if (node2.right) {
                getTheLeaves2(node2.right)
            } 
            if (node2.left) {
                getTheLeaves2(node2.left)
            }
    }
    
    getTheLeaves1(root1)
    getTheLeaves2(root2)
    
   
    
    if(leaf1.length !== leaf2.length) return false
    
    for(let i = 0; i < leaf1.length -1; i++) {
        if(leaf1[i].val !== leaf2[i].val) return false  
    }
    
    return true
    
};