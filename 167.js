// Two Sum II - Input array is sorted

// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

// Note:
// Your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.
 
// Example 1:
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]

var twoSum = function(numbers, target) {
    for(let i=0; i<numbers.length; i++){
        for(let j=1; j<numbers.length; j++){
            if(j!=i & numbers[i]+numbers[j]===target){
                return [i+1, j+1]
            }
        }
    }
};

//OR

var twoSum = function(numbers, target) {
	let hash = {};
	for(let i = 0; i < numbers.length; i++) {
		const n = numbers[i];
		if(hash[target - n] !== undefined) {
			return [hash[target - n]+1, i+1];
		}
		hash[n] = i;
	}
	return [];
}