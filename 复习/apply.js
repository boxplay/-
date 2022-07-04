Function.prototype.myApply=function(obj){
  const ctx = obj || window
  ctx.fn = this
  const args = arguments[1]
  console.log(args)
  const res = ctx.fn(...args)
  return res
}
const o = {
  name:'bdu'
}
function a(){
  console.log(this.name)
}
a.myApply(o,[1,2])