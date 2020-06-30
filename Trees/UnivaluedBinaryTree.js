var isUnivalTree = function(root) {
    if(root == null) return true  
    
   if(root.right != null && root.right.val != root.val){
       return false
   } 
    
   if(root.left != null && root.left.val != root.val) {
       return false
   }
    
  if(isUnivalTree(root.right) && isUnivalTree(root.left)) return true
    
   return false
   
};