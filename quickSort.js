// 分为左右两部分，两边递归快排，最后合并

function quickSort(arr){
  if(Object.prototype.toString.call(arr) !== '[object Array]'){
    return false
  }
  if(arr.length<=1){
    return arr
  }
  let left = [];
  let right = [];
  let middle = math.floor(arr.length / 2)
  let middleData = arr.slice(middle,1)[0]
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > middleData){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(middleData,quickSort(right))
}