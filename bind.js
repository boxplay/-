//bind
Function.prototype.myBind = function(contxt){
  const ctx = JSON.parse(JSON.stringify(contxt)) || window
  ctx.fn = this
  
  const args = Array.from(arguments).slice(1)
  return function(){
    const allArgs = args.concat(Array.from(arguments))
    return ctx.fn(...allArgs)
  }
}
obj = { c: 2 }
function a(x,y,z) { console.log( this.c) }
a.myBind(obj,1,2)(3)