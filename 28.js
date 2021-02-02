// Implement strStr().
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Example 3:
// Input: haystack = "", needle = ""
// Output: 0

//ADJUST - Incorrect

var strStr = function(haystack, needle) {
    if (needle === "") return 0;
    if (haystack==="") return -1;
    
    let firstIndex = 0;
    
    for (let i=0; i<haystack.length; i++){
        let currentHayIndex = i
        for(let j=0; j<needle.length; j++){
            if(haystack[i] !== needle[j]) {
                firstIndex = 0;
                i = currentHayIndex    
            }
            else if(haystack[i] === needle[j]) {
                if (firstIndex === 0) firstIndex = i;
                if (j === needle.length-1) return firstIndex;
                i++;
            };
        } 
    }
    
    return -1
};