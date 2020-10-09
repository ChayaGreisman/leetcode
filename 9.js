//Palindrome Number

// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
// * Could you solve it without converting the integer to a string?

// Example 1:
// Input: x = 121
// Output: true

// Example 2:
// Input: x = -121
// Output: false

var isPalindrome = function(x) {
    if (x < 0) return false

    let rev = 0

    for(let i = x; i >= 1; i = Math.floor(i/10)) rev = rev*10 + i%10

    return rev === x
};