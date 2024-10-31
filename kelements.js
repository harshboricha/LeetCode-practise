// function topKFrequent(nums, k) {
//     let obj= {}
    
//     for(i=0;i<nums.length;i++){
//         const foundEntry = Object.entries(obj).find(([key, value]) => key === nums[i]);

//         if (foundEntry) {
//         // if(obj.hasOwnProperty(nums[i])){
//             console.log(obj)
//         }else{
//             // // obj.keys =nums[i]
//             // obj.forEach(key => {
//             //     obj[nums[i]] = undefined; // or you can use null
//             // });
//             obj[key] ={...nums[i]}
//             console.log(obj,"ssdsd")
//         }
//     }
// }
// topKFrequent([1,2,2,3,3,3],2)

function topKFrequent(nums) {
    const freqMap = {};
    
    // Step 1: Populate the frequency map
    for (const num of nums) {
        if (freqMap[num]) {
            freqMap[num] += 1; // Increment count if key exists
        } else {
            freqMap[num] = 1; // Initialize count if key does not exist
        }
    }
    
    // Step 2: Find the maximum occurring number
    let maxCount = 0;
    let maxNum = null;

    const sortedKeys = Object.keys(freqMap).map(Number).sort((a, b) => b - a);

const highestKey = sortedKeys[0];
const secondHighestKey = sortedKeys[1];
console.log("hhh",highestKey,secondHighestKey)
    
    // for (const [key, value] of Object.entries(freqMap)) {
    //     if (value > maxCount) {
    //         maxCount = value;
    //         maxNum = key; // Update maxNum to current key
    //     }
    // }
    
    // return maxNum; // Return the key with the highest frequency
}

// Example usage:
console.log(topKFrequent([1, 2, 2,2,2, 3, 3, 3])); // Output: 3
