//Kids With the Greatest Number of Candies

// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.
// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

// Example 1:
// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 


var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    let result = [];
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) result.push(true)
        else result.push(false)
        }
    return result
};

//OR

const kidsWithCandies = (candies, extraCandies) => {
  const ret = [];
  let max = 0;
  for (const val of candies) {
    val > max && (max = val);
  }
  for (let i = 0; i < candies.length; ++i) {
    ret.push(candies[i] + extraCandies >= max);
  }
  return ret;
};

