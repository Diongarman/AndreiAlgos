/*
https://leetcode.com/problems/validate-binary-search-tree/solution/

*/

var isValidBST = function(root) {
    
    return helper(root)
                  
};

function helper(node, lower=Number.MIN_VALUE, upper=Number.MAX_VALUE) {
        
  if(!node) {return true}
        
  let value = node.val;
        
  if (value<= lower || value >= upper) {
    return false
    }
        
        
  if(!helper(node.right, value, upper)) {return false}
  if(!helper(node.left,lower, value)) {return false}
  return true
        
    }
    