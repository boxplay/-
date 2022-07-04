Array.prototype.reduce = function(cb,initVal){
  let result = initVal
  if(Object.prototype.toString.call(cb) !== '[object Function]'){
    throw new Error('cb must be a function')
  }
  const args = this
  for(let i = 0;i<args.length;i++){
    result = cb(result,args[i],i,args)
  }

  return result
}

const a = [1,2,3].reduce((t,p)=>{
  return t +=p
},10)
console.log(a)