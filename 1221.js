
// Balanced strings are those who have equal quantity of 'L' and 'R' characters.

// Given a balanced string s split it in the maximum amount of balanced strings.

// Return the maximum amount of splitted balanced strings.

var balancedStringSplit = function(s) {

    let totalCount = 0
    let rCount = 0
    let lCount = 0
    
    if (s.length % 2 != 0){
        return 0
    }
    
    for (let i=0; i<s.length; i++){
        if (s[i] === 'R'){
            rCount++
        } else if (s[i] === 'L'){
            lCount++
        }
        
        if (rCount === lCount){
            totalCount++
            rCount = 0
            lCount = 0
        }
    }
    
    return totalCount
    
};

//OR
    
var balancedStringSplit = function(s) {
    let result = 0, countL = 0, countR = 0
    for (const char of s) {
        if (char === 'R') countR++
        if (char === 'L') countL++
        if (countR === countL) result++
    }
    return result
};