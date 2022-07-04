// 冒泡排序
function bubbleSort(arr){
  if(Object.prototype.toString.call(arr) !== '[object Array]'){
    return false
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
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

function bubbleSort2(arr){
  if(Object.prototype.toString.call(arr) !== '[object Array]'){
    return false
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
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


function bubbleSort3(arr){
  if(Object.prototype.toString.call(arr) !== '[object Array]'){
    return false
  }
  for (let i = 0; i < arr.length; i++) {
    for(let j=i;j<arr.length;j++){
      let temp = arr[i]
      if(arr[j]> arr[j+1]){
        temp = arr[j]
        arr[j+1] = temp
        arr[j] = arr[j+1]
      }
    }
  }
  return arr
}


console.log(bubbleSort2([3,1,22,44,11,98,72]))



console.log(bubbleSort2([3,1,22,44,11,98,72]))