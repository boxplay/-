function myNew(parent,...args){
  const obj = Object.create({})
  obj.__proto__ = parent.prototype
  let result = parent.apply(obj,args)
  return result instanceof Object ?result:obj
}
function Person(name){
  this.name = name
}

const b = myNew(Person,'hello')
console.log(b.name)