//REVERSE INTEGER

// Given a 32-bit signed integer, reverse digits of an integer.

// Note:
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321



var reverse = function(x) {
    const absReversed = Math.abs(x).toString().split('').reverse().join('');
    if (absReversed > 2**31) return 0;
    return absReversed * Math.sign(x);
};

//^^uses .reverse() .....?

var reverse = function(x){
    if (x < 0) return -reverse(-x);

    var reversedInt = 0;

    while(x>0) {
        var a = x%10;
        x = Math.floor(x/10);

        //Should no larger than Math.floor(Number.MAX_VALUE/10)
        if(reversedInt >= 214748365)
            return 0;
        reversedInt = reversedInt*10+a;
    }

    return reversedInt;
}