var twoSum = function(nums, target) {
  var m = new Map()
  var index = []
  for(let i = 0;i<nums.length;i++){
      var t = m.get(target - nums[i])
      // console.log(i,'====i',t)
      if(t !== undefined && t !== i){
        index.push(t)
          index.push(i)
          break
      }else{
          console.log(nums[i],'------')
          m.set(nums[i],i)
      }
  }
  return index
};

twoSum([1,2,3,4,5],3)