function deepClone(obj){
  return JSON.parse(JSON.stringify(obj))
}


function deepClone2(obj){
  let newObj = {}
  let keys = Object.keys(obj)
  for(let i = 0;i<keys.length;i++){
    
    if(Object.prototype.toString.call(obj[keys[i]]) === '[object Object]' && obj[keys[i]] !==null){
      newObj[keys[i]] = deepClone2(obj[keys[i]])
    }else{
      newObj[keys[i]] = obj[keys[i]]
    }
  }
  return newObj
}

const a = {
  name:'du',
  other:{
    age:22,
    sex:1
  }
}
const b = deepClone2(a)
a.name = 'aaa'
console.log(b,a)