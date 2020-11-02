// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:
// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.
 
// Note: You may assume the string contains only lowercase English letters.

var firstUniqChar = function(s) {
    let map = {}
    
    for (let char of s) {
        map[char] ? map[char]++ : map[char] = 1
    }
    
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) return i
    }
        
    return -1
};


var firstUniqChar = function(s) {
    for(i=0; i<s.length; i++)
        if(s.indexOf(s[i])===s.lastIndexOf(s[i])) return i
    return -1
};