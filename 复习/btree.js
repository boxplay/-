class Node { 
  constructor(data){
    this.data =data;
    this.left = null;
    this.right = null;
  }
}

class BTree { 
  constructor(){
    this.root = null
  }

  insert(val){
    const node = new Node(val)
    if(this.root === null){
      this.root = node
    }else{
      this.insertNode(this.root,node)
    }
  }
  insertNode(node,newNode){
    if(node.data > newNode.data){
      if(node.left === null){
        node.left = newNode
      }else{
        this.insertNode(node.left,newNode)
      }
      
    }else{
      if(node.right === null){
        node.right = newNode
      }else{
        this.insertNode(node.right,newNode)
      }
    }
  }
}
var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13]
var bt = new BTree ()
nodes.forEach((item) => {
    bt.insert(item)
})
console.log(bt)

function treeHeight(treeNode,checkBalanceTree = false){
  let leftHeight = 0
  if(treeNode !== null){
    leftHeight = treeHeight(treeNode.left)
  }
  let rightHeight = 0
  if(treeNode !== null){
    rightHeight = treeHeight(treeNode.right)
  }
  if(checkBalanceTree && (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) >1)){
    return -1
  }
  return treeNode === null?0:Math.max(leftHeight,rightHeight) + 1
}
console.log(treeHeight(bt.root))

function isBalanceTree(root){
  return treeHeight(root,true) !== -1
}
console.log('isbalance tree:',isBalanceTree(bt.root))