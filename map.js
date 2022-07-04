Array.prototype.map = function(callback){
  const args = JSON.parse(JSON.stringify(this))
  for(let i=0;i<args.length;i++){
    args[i] = callback(args[i],i)
  }
  return args
}
const a = [1,2,3]
const newa = a.map((v,i)=>v+1)
console.log(newa,a)