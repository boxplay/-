let x = 10
function fn1(x) {return x + 1}
function fn2(x) {return x + 2}
function fn3(x) {return x + 3}
function fn4(x) {return x + 4}

function compose(){
  const funcs = [...arguments]
  return funcs.reduce((a,b)=>{
    return (...args)=>{
      return a(b(...args))
    }
  })
}
const af = compose(fn1,fn2,fn3,fn4)
const a = fn1(fn2(fn3(fn4(10))))
console.log(af(10))