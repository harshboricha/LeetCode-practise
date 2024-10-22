// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
var removeElement = function(nums, val) {
    let k =0
    for(i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[k]=nums[i]
            k++;
        }
    }
    console.log(k,nums)
    return k
}

    
removeElement([3,2,2,3], 3)