Function.prototype.myCall = function(obj){
  const ctx = obj || window
  ctx.fn = this
  const args = Array.from(arguments).slice(1)
  const res = ctx.fn(...args)
  return res
}

const o = {
  name:'bdu'
}
function a(c,d){
  console.log(this.name,c,d)
}
a.myCall(o,'c','d')