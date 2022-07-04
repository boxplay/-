class Node {
  constructor(data){
    this.data =data;
    this.left = null;
    this.right = null;
  }
}

class BTree{
  constructor(){
    this.root = null
  }

  insert(val){
    const data = new Node(val)
    if(this.root === null){
      this.root = data
    }else{
      this.insertNode(this.root,data)
    }
  }

  insertNode(node,newNode){
    if(node.data < newNode.data){
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
  orderTraverse(node,cb){
    if(!node){
      return ;
    }
    cb(node.data,node)
    this.orderTraverse(node.left,cb)
    this.orderTraverse(node.right,cb)
  }
  traverse(cb) {
    this.orderTraverse(this.root, cb)
  }
  //前序遍历（根左右）
  qeach(node){
    if(node === null){
      return
    }
    console.log(node.data,'====data')
    this.qeach(node.left)
    this.qeach(node.right)
  }
  zeach(node){
    if(node === null){
      return
    }
    this.qeach(node.left)
    console.log(node.data,'====data')
    this.qeach(node.right)
  }
  heach(node){
    if(node === null){
      return
    }
    this.qeach(node.left)
    this.qeach(node.right)
    console.log(node.data,'====data')
  }
}
var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13]
var bt = new BTree ()
nodes.forEach((item) => {
    bt.insert(item)
})
// var callback = function (key, node) {
//     console.log(key)
//     console.log(node)
// }
// bt.traverse(callback)
bt.heach(bt.root)