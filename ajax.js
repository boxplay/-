//手写ajax
const ajax = {
  get:(url,callBack)=>{
    const xhr = new XMLHttpRequest();
    xhr.open('get',url,false)
    xhr.onreadystatechange = ()=>{
      console.log(xhr.readyState,'xhr.readyState')
      if(xhr.readyState === 4){
        callBack(xhr.responseText)
      }
    }
    xhr.send()
  },
  post:(url,callBack,data)=>{
    const xhr = new XMLHttpRequest();
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.open('post',url,false)
    xhr.onreadystatechange = ()=>{
      console.log(xhr.readyState,'xhr.readyState')
      if(xhr.readyState === 4){
        callBack(xhr.responseText)
      }
    }
    //调用send()函数发送数据
    xhr.send('bookname=aaa&author=aaaa&publisher=aaaa');
  }
}

ajax.get('https://ali-cyb-cdn.kaikeba.com/kkb-plat/mingchun/editControl.json',(res)=>{
  console.log(res,'====res')
})