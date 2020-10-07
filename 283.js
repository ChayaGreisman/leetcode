//MOVE ZEROS

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

var moveZeroes = function(nums) {
    for (let i = nums.length; i>=0; i--){
        if(nums[i]===0){
            nums.push(nums.splice(i, 1)[0])
        }
    }
    return nums
};