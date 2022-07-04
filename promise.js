// 实现promise
class MyPromise{
  constructor(executor){
    this.value = '';
    this.reason='';
    this.state = 'pending'
    this.successFunc = []
    this.failFunc = []

    let resolve = (value)=>{
      if(this.state === 'pending'){
        this.state = 'complete';
        this.value = value
        this.successFunc.forEach(v=>{
          v()
        })
      }
    }
    let reject = (reason)=>{
      if(this.state === 'pending'){
        this.state = 'falied';
        this.reason = reason
        this.failFunc.forEach(v=>v())
      }
    }
    try {
      executor && executor(resolve,reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onSuccess,onFail){
    if(this.state === 'complete'){
      onSuccess && onSuccess(this.value)
    }
    if(this.state === 'falied'){
      onFail && onFail(this.reason)
    }
    if(this.state === 'pending'){
      this.successFunc.push(onSuccess)
      this.failFunc.push(onFail)
    }
  }
}
MyPromise.prototype.all = (promise)=>{
  let list = []; // 存储所有的结果
  let pCounrt = 0
  return new MyPromise((resolve,reject)=>{
    for (let index = 0; index < promise.length; index++) {
      promise[index].then(res=>{
        list[index] = res
        pCounrt++
        if(pCounrt === promise.length){
          resolve(list)
        }
      },err=>{reject(err)})
    }
  })
}

MyPromise.prototype.race=(promise)=>{
  return new Promise((resolve,reject)=>{
    for (let index = 0; index < promise.length; index++) {
      promise[index].then(res=>{
        resolve(res)
      },err=>{reject(err)})
    }
  })
}

new MyPromise().race([new Promise((resolve,reject)=>{
  setTimeout(resolve,200,2000)
}),new Promise((resolve,reject)=>{
  setTimeout(resolve,300,3000)
})]).then((res)=>{
  console.log(res,'race')
},(error)=>{
  console.log(error,'r-------')
})
