// INTERSECTION OF TWO ARRAYS

// Given two arrays, write a function to compute their intersection.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Note:

// Each element in the result must be unique.
// The result can be in any order.
 


//Solutions using Set
// O(n)

function intersect(nums1, nums2){
    let result = [];
    let setNum1 = new Set(nums1);
    let setNum2 = new Set(nums2);

    let [smallSet , largeSet] = (setNum1.length < setNum2.length) ? [setNum1 , setNum2] : [setNum2 , setNum1];

    smallSet.forEach( num => {
        largeSet.has(num) && result.push(num);
    });

    return result;
}