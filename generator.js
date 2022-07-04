function* a(x){
  var z = 4 * (yield (x+1));
  console.log(z,'====')
  return z + 1
}
var g = a(15)
console.log(g.next())
console.log(g.next())
console.log(g.next(114))