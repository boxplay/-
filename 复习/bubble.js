function bubble(arr){
  if(Object.prototype.toString.call(arr) !== '[object Array]'){
    throw new Error('args must be an array')
  }
  for(let i = 0;i<arr.length;i++){
    for(let j = 0;j<arr.length - 1 - i;j++){
      let temp = arr[i]
      if(arr[j] < arr[j+1]){
        temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}

console.log(bubble([11,33,2,1,6,3,14]))