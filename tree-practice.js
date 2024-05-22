const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  let stack = [rootNode]
  let min = rootNode.val

  while(stack.length) {
    const currNode = stack.pop()
    if (currNode.val < min) {
      min = currNode.val
    }
    if(currNode.left) {
      stack.push(currNode.left)
    }
  }
  return min
}

function findMaxBST (rootNode) {
  let stack = [rootNode]
  let max = rootNode.val

  while(stack.length) {
    const currNode = stack.pop()
    if (currNode.val > max) {
      max = currNode.val
    }
    if(currNode.right) {
      stack.push(currNode.right)
    }
  }
  return max
}

function findMinBT (rootNode) {
  let stack = [rootNode]
  let min = rootNode.val

  while(stack.length) {
    const currNode = stack.pop()
    if (currNode.val < min) {
      min = currNode.val
    }
    if(currNode.left) {
      stack.push(currNode.left)
    }
    if(currNode.right) {
      stack.push(currNode.right)
    }
  }
  return min 
}

function findMaxBT (rootNode) {
  let stack = [rootNode]
  let max = rootNode.val

  while(stack.length) {
    const currNode = stack.pop()
    if (currNode.val > max) {
      max = currNode.val
    }
    if(currNode.left) {
      stack.push(currNode.left)
    }
    if(currNode.right) {
      stack.push(currNode.right)
    }
  }
  return max
}

function getHeight (rootNode) {
  // Your code here 
}

function balancedTree (rootNode) {
  // Your code here 
}

function countNodes (rootNode) {
  // Your code here 
}

function getParentNode (rootNode, target) {
  // Your code here 
}

function inOrderPredecessor (rootNode, target) {
  // Your code here 
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side, 
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
