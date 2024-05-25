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
  let parentNode = getParentNode(rootNode, target);
  // Undefined if the target cannot be found
  if (parentNode === undefined) return undefined;
  
  if (target < rootNode.val)
    rootNode.left = deleteNodeBST(rootNode.left, target)
  // If the key to be deleted is greater than the root's key, then it lies in the right subtree
  else if (target > rootNode.val)
    rootNode.right = deleteNodeBST(rootNode.right, target)
  // If key is same as root's key, then this is the node to be deleted
  else {
    // Node with only one child or no child
    if (!rootNode.left)
      return rootNode.right
    else if (!rootNode.right)
      return rootNode.left
    // Node with two children: Get the inorder successor (smallest in the right subtree)
    rootNode.val = findMinBST(rootNode.right)
    // Delete the inorder successor
    rootNode.right = deleteNodeBST(rootNode.right, rootNode.val)
  }
  return rootNode
}

bstRoot = new TreeNode(4);
bstRoot.left = new TreeNode(2);
bstRoot.left.left = new TreeNode(1);
bstRoot.left.right = new TreeNode(3);
bstRoot.right = new TreeNode(6);
bstRoot.right.left = new TreeNode(5);
bstRoot.right.right = new TreeNode(7);

deleteNodeBST(bstRoot, 9)

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
