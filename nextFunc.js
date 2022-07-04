function nextFunc(){
  let index = 0;
  const args = Array.from(arguments)
  function next(){
    console.log('执行函数：',args[index].name)
    index ++ 
    if(index < args.length){
      args[index](next)
      
    }
  }
  args[index](next)
}
function a(next) {
  next()
}
function b(next) {
  next()
}
function c(next) {
  next()
}
nextFunc(a,b,c)