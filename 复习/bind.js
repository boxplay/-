Function.prototype.myBind = function(obj){
  const ctx = obj || window
  ctx.fn = this
  const args = Array.from(arguments).slice(1)
  return function(){
    let res;
    let newArgs = args.concat(arguments)
    res = ctx.fn(...newArgs)

    return res
  }
}
const o ={
  name:'bdu'
}
function a(x,y) {
  console.log(x,y)
}
a.myBind(o,1,2)()