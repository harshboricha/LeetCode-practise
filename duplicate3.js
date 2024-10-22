// var removeDuplicates = function(nums) {
//     let k=0
//     let nums2 = nums
//     for(i=0;i<nums2.length;i++){
//         if(nums2[i]!==nums2[i+1]){
//         // console.log("knumss",nums[k])
//         //  nums[i]=nums[k]
//         nums[k]=nums[i]
//         }else{
//             console.log("numsi",nums[k])
//             k++
//         //     console.log("numssaaaa",nums[i],nums[k])
//         //    nums[i]=nums[k]
//            console.log("k",k,i)
           


//         }
//     }console.log(nums)
// };

var removeDuplicates = function(nums) {
    let k=0
    for(i=0;i<nums.length;i++){
        if(nums[i]!==nums[k-1]){
         nums[k]=nums[i]
         k++
        }
      
} return k
};
removeDuplicates([0,0,1,1,1,2,2,3,3,4])