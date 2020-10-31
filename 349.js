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
 

var intersection = function(nums1, nums2) {
    let obj = {};
    for(let i = 0; i<nums1.length; i++){
        obj[nums1[i]] = obj[nums1[i]]+1 || 1
    }
    let arr = [];
    for(let i = 0; i<nums2.length; i++){
        if( nums2[i] in obj && !arr.includes(nums2[i])){
            arr.push(nums2[i])
        }
    }
    return arr;
};


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




//Brute Force Solution: O(n logn)

function intersect(nums1, nums2){
    let sortedNums1 = nums1.sort((a , b) => a - b);
        let sortedNums2 = nums2.sort((a , b) => a - b);
        let result = [];
        let i = 0;
        let j = 0;
        
        while(i < sortedNums1.length && j < sortedNums2.length){
            if(sortedNums1[i] === sortedNums2[j]){
                if(!result.includes(sortedNums1[i])) result.push(sortedNums1[i]);
                i++;
                j++;
            }
            else if(sortedNums1[i] < sortedNums2[j]) i++;
            else j++;
        }
        return result;
}
//HashMap Solution: O(n)
    
function intersect(nums1, nums2){
    let map = new Map();
    for(let num of nums1){
        if(!map.has(num))
            map.set(num, 1);
    }
    
    return nums2.filter(n => {
        if(map.has(n)){
            map.delete(n);
            return true;
        }
        else return false;
    });
}