// 实现new
function myNew(fn,...args){
  let obj = {}
  obj.__proto__ = fn.prototype
  let result = fn.apply(obj,args)
  console.log(obj,'====')
  return result instanceof Object ?result :obj
}

function Person(a,b){
  this.a = a;
  this.b = b;
  return 1;
}

const o = myNew(Person,1,2)
console.log(o)