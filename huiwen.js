//回文字符串
function isHuiWen(str){
  return str == str.split("").reverse().join("")
}

console.log(isHuiWen('abcba'))