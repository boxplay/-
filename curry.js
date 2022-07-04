// 函数柯里化
function createCurry(fn,...params){
  console.log(params,'=========')
  let args = params || []
  if(fn.length === args.length){
    return fn.apply(this,args)
  }
  return function(...nargs){
    
    let newArgs = args.concat(nargs)
    if(newArgs.length<fn.length){
      return createCurry.call(this,fn,...newArgs)
    }else{
      return fn.apply(this,newArgs)
    }
  }
}

function adder(a,b,c,d,e){
  return a+b+c+d+e
}

const _add = createCurry(adder,1)
console.log(_add(2,3,3,3))
console.log(_add(3,3,3,3))