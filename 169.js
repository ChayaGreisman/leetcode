//MAJORITY ELEMENT

//Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:
// Input: [3,2,3]
// Output: 3

var majorityElement = function(nums) {
    let obj = {};
    
    for(let i = 0; i < nums.length; i++){
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
        if(obj[nums[i]] > nums.length / 2)  return nums[i];
    }
    
};


// alt solutions:

var majorityElement = function(nums) {
    // sort the array and the middle is the majority
    nums.sort((a,b) => a - b);
    return nums[Math.floor(nums.length/2)];
}; 


var majorityElement = function(nums) {
    
    // Boyer-Moore Voting Algorithm
    
    let count = 0, majority = 0
    
    for (num of nums) {
        if (count == 0) {
            majority = num
        }
        count += num == majority ? 1 : -1
    }
    
    return majority
};