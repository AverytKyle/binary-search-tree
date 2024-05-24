const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  let stack = [rootNode]
  let min = rootNode.val

  while (stack.length) {
    const currNode = stack.pop()
    if (currNode.val < min) {
      min = currNode.val
    }
    if (currNode.left) {
      stack.push(currNode.left)
    }
  }
  return min
}

function findMaxBST(rootNode) {
  let stack = [rootNode]
  let max = rootNode.val

  while (stack.length) {
    const currNode = stack.pop()
    if (currNode.val > max) {
      max = currNode.val
    }
    if (currNode.right) {
      stack.push(currNode.right)
    }
  }
  return max
}

function findMinBT(rootNode) {
  let stack = [rootNode]
  let min = rootNode.val

  while (stack.length) {
    const currNode = stack.pop()
    if (currNode.val < min) {
      min = currNode.val
    }
    if (currNode.left) {
      stack.push(currNode.left)
    }
    if (currNode.right) {
      stack.push(currNode.right)
    }
  }
  return min
}

function findMaxBT(rootNode) {
  let stack = [rootNode]
  let max = rootNode.val

  while (stack.length) {
    const currNode = stack.pop()
    if (currNode.val > max) {
      max = currNode.val
    }
    if (currNode.left) {
      stack.push(currNode.left)
    }
    if (currNode.right) {
      stack.push(currNode.right)
    }
  }
  return max
}

function getHeight(rootNode) {
  if (!rootNode) return -1
  if (!rootNode.left && !rootNode.right) return 0


  let leftHeight = getHeight(rootNode.left)
  let rightHeight = getHeight(rootNode.right)

  return Math.max(leftHeight, rightHeight) + 1

}

function balancedTree(rootNode) {
  if (!rootNode) return true
  
  let countLeft = getHeight(rootNode.left)
  let countRight = getHeight(rootNode.right)
  
  return Math.abs(countLeft - countRight) <= 1 && balancedTree(rootNode.left) && balancedTree(rootNode.right)
}

function countNodes(rootNode) {
  const stack = [rootNode]
  let count = 1
  while (stack.length) {
    let node = stack.pop()
    if (node.left) {
      stack.push(node.left)
      count++
    }
    if (node.right) {
      stack.push(node.right)
      count++
    }
  }
  return count

}

function getParentNode(rootNode, target) {
  // Your code here 
  const stack = [rootNode]
  if (rootNode.val === target) return null

  while (stack.length) {
    let node = stack.pop()

    if (node.left) {
      if (node.left.val === target) {
      return node
      } else {
      stack.push(node.left)
      }
    }
    if (node.right) {
      if (node.right.val === target) {
      return node
    } else {
      stack.push(node.right)
    }
    }
  }
  return undefined
  
}

function inOrderPredecessor(rootNode, target) {
  // Your code here 
  if (!rootNode) return null

  if (target <= rootNode.val) return inOrderPredecessor(rootNode.left, target)
  else {
    const node = inOrderPredecessor(rootNode.right, target)
    if (node) return node
    else return rootNode.val
  }

    //      4
    //    /   \
    //   2     6
    //  / \   / \
    // 1   3 5   7
  
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the currNode
  
  // Undefined if the target cannot be found

  // Set target based on currNode

  // Case 0: Zero children and no currNode:
  //   return null
  let queue = [this.root]
  
      while(queue.length) {
        const currNode = queue.shift()
        
        if(currNode.left) {
          if (currNode.left.val === target) {
            let 
          }
          queue.push(currNode.left)
        }
        if(currNode.right) {
          queue.push(currNode.right)
        }
      }
  // Case 1: Zero children:
  //   Set the currNode that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side, 
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the currNode point to the child

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
