// var twoSum = function(nums, target) {
//     // Create an object to store numbers and their corresponding indices
//     let numToIndexMap = {};

//     // Loop through the array
//     for (let i = 0; i < nums.length; i++) {
//         // Calculate the difference between the target and the current number
//         let diff = target - nums[i];
//         console.log("numsto",numToIndexMap)
//         // Check if the difference already exists in the object
//         if (numToIndexMap.hasOwnProperty(diff)) {
//             // If it exists, return the indices of the current number and the number that adds up to the target
//             console.log("numkks",i,numToIndexMap)
//             return [i, numToIndexMap[diff]];
//         }
//         console.log("numjjjjs",i,numToIndexMap)
//         // If it doesn't exist, add the current number and its index to the object
//         numToIndexMap[nums[i]] = i;
//     }

//     // If no two numbers add up to the target, return null
//     return null;
// };

// twoSum([3,2,4],6)

function twoSums(nums, target) {
    // Using Object.assign to create
    // new object from array
    let obj = Object.assign({}, nums);
    let remaining,key
    // Display output
    console.log(JSON.stringify(obj));
    for(i=0;i<nums.length;i++){
       remaining= target-nums[i]
       console.log("rema",remaining)
       const foundEntry = Object.entries(obj).find(([key, value]) => value === remaining);
       if ((foundEntry) && (foundEntry[0] != i)) {
        key = parseInt(foundEntry[0])
           console.log("fou",foundEntry)
           let foundarr = []
           foundarr.push(parseInt(key))
           foundarr.push(i)
           console.log("hhhh",foundarr)}
    }
}


 twoSums([3,2,3],6)

