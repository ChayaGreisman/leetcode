//Longest Continuous Increasing Subsequence

// Given an unsorted array of integers, find the length of longest continuous increasing subsequence (subarray).

// Example 1:
// Input: [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3. 

var findLengthOfLCIS = function(nums) {
    let len = 1, maxLen = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < nums[i+1]) len++;
        else len = 1;
        maxLen = Math.max(len, maxLen);
    }
    return maxLen;  
};