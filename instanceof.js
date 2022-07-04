function myInstanceof(L,R){
  const  objtype = ['string','number','boolean','undefined'];
  if(objtype.includes(typeof(L))){
    return false
  }
  LP = L.__proto__; 
  while(true){
    if(LP === R.prototype){
      return true
    }
    if(LP === null){
      return false
    }
    LP = LP.__proto__
  }
}
function a(){
  return 1;
}
const b = new a();
console.log(a.prototype === b.__proto__)
console.log(myInstanceof(b,a))