/*

good video that user made explaining solution with whiteboard:
https://www.youtube.com/watch?v=seaGHJFWNPs&feature=emb_title

*/

let maxDepth = function (root) {
  let maxNodes = (node, sum) => {
    //return sum when we hit leaf
    if (node === null) {
      return sum;
    }

    //recursively bifurcates tree
    //each bifurcation we add 1 to the sum
    return Math.max(
      maxNodes(node.left, sum + 1),
      maxNodes(node.right, sum + 1)
    );
  };

  return maxNodes(root, 0);
};
