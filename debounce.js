function debounce(cb,wait){
  let timer = null
  return function(){
    const ctx = this
    const args = arguments
    if(timer){
      clearTimeout(timer)
      timer = setTimeout(()=>{
        cb.apply(ctx,args)
      },wait)
    }
    
  }
}



function throttle(cb,wait){
  let timer
  return function(){
    const ctx = this
    const args = arguments
    if(!timer){
      timer = setTimeout(()=>{
        cb.apply(ctx,args)
        timer = null
      },wait)
    }
  }
}