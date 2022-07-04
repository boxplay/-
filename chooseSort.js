// 选择排序，挑选最大或最小
function chooseSort(arr){
  if(Object.prototype.toString.call(arr) !=='[object Array]'){
    return false
  }
  for (let i = 0; i < arr.length; i++) {
    let minNum = i;
    //比较每一个数，挑选出最大或者最小的替换到当前循环的位置
    for (let j = i+1; j < arr.length; j++) {
      if(arr[minNum] > arr[j+1]){
        minNum = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[minNum]
    arr[minNum] = temp
  }
  return arr
}
console.log(chooseSort([77,23,55,2,16,8,67]))