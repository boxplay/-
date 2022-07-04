//lru 缓存
const LRU = function(sLength){
  this.cache = new Map()
  this.sLength = sLength
}
LRU.prototype.get = function(key){
  if(this.cache.has(key)){
    //获取删除重新写入
    const val = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key,val)
    return val
  }
}

LRU.prototype.put = function(key,val){
  //检测删除写入
  if(this.cache.has(key)){
    this.cache.delete(key)
  }else if(this.cache.size()>=this.sLength){
    this.cache.delete(this.cache.keys().next().value)
  }
  this.cache.set(key,val)
}