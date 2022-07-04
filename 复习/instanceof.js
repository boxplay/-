function myInstanceof(fna,fnb){
  if(['string','number','boolean','undefined'].includes(typeof(fnb))){
    return false
  }
  let lp = fna.__proto__
  while(true){
    if(lp=== fnb.prototype){
      return true
    }
    if(lp === null){
      return false
    }
    lp = lp.__proto__
  }
}

function a(){
  return 1;
}
const b = new a();
console.log(a.prototype === b.__proto__)
console.log(myInstanceof(b,a))