// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]/

function groupAnagrams(strs) {
    const res = {};
    for (let s of strs) {
        console.log("s",s)
        const sortedS = s.split('').sort().join('');
        console.log(sortedS,"sss")
        if (!res[sortedS]) {
            res[sortedS] = [];
        }
        // console.log("Ss",res[sortedS].push(s))
        res[sortedS].push(s);
    }
    let www = Object.values(res)
    console.log(www,"ww")
    return Object.values(res);
}


groupAnagrams(["act","pots","tops","cat","stop","hat"])
