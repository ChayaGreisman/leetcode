//REVERSE STRING

// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.


var reverseString = function(s) {
    for (var i = 0; i < Math.floor(s.length/2); i++) {
        [s[i],s[s.length-1-i]] = [s[s.length-1-i],s[i]]  
    }
};

var reverseString = function(s) {
    function recursiveString(left,right) {
        if (left < right) {
            [s[left],s[right]]  = [s[right],s[left]];
            recursiveString(left+1,right-1);
        }
    }
    recursiveString(0,s.length-1)    
};