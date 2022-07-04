function LRU(sLength){
  this.cache = new Map()
  this.sLength = sLength
}

LRU.prototype.get = function(key){
  if(this.cache.get(key)){
    const val = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key,val)
    return this.cache.get(key)
  }
  return false
}

LRU.prototype.put = function(key,val){
  if(this.cache.get(key)){
    this.cache.delete(key)
  }else if(this.cache.size > this.sLength){
    this.cache.delete(this.cache.keys().next().value)
  }
  this.cache.set(key,val)
}

const a = new LRU(2)
a.put('a',1)
a.put('b',2)
a.put('c',3)
console.log(a.get('a'))
