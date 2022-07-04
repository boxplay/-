const arr = [1,2,3]

Array.prototype.reduce = function(fn,initial){
  if(!fn instanceof Function) return false
  let arr = this
  let prev = initial || 0
  for(let i =0;i<arr.length;i++){
    prev = fn(prev,arr[i],i,arr)
  }
  return prev
}
const a = arr.reduce((t,p)=>{
  return t +=p
},10)
console.log(a)