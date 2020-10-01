// HAPPY NUMBER

var isHappy = function(n) {
    let numSet = new Set()
    
    
   while (n !== 1) {
        let numSum = 0
        while (n > 0) {
            numSum += Math.pow(n % 10, 2)
            n = Math.floor(n /= 10)
        }
        if (!numSet.has(numSum)) {
            numSet.add(numSum)
            n = numSum
        } else {
            return false
        }    
    }
    
   return true
};
