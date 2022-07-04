//call
Function.prototype.myCall = function(context){
  const ctx = context || window
  ctx.func = this 
  const args = Array.from(arguments).slice(1)
  //通过在ctx中新建一个 函数对象等于调用时的对象 来调用执行来修改this指向
  const res = arguments.length > 1 ? ctx.func(...args) : ctx.func()
  delete ctx.func
  return res
}
obj={c:2}
function a(x,y){}
a.call(obj,1,2)//{c:2} 1 2
a.myCall(obj,1,2)//{c:2,func:[function a]} 1 2