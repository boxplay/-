//apply
Function.prototype.myApply = function(contxt){
  const ctx = contxt || window
  ctx.fn = this
  const args = arguments[1]
  console.log(args,'===')
  const res = ctx.fn(...args)
  return res
}

const obj = {c:2}
function a(x,y){
  console.log(x)
}
a.myApply(obj,[1,2,3])