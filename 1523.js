// O(n)
var countOdds = function(low, high) {
    let count = 0;
    for (let i=low; i<=high; i++){
        if(i%2!==0){
            count++
        }
    }
    return count;  
}

// O(1)
var countOdds = function(low, high) {
    let count = 0;
    if(low%2!==0 && high%2!==0){
        count++
        count += ((high-low)/2)
    } else {
        count = ((high-low)/2)
    } 
    return count
};


var countOdds = function(low, high) {
    
	const c = Math.round((high-low) / 2);

    return low % 2 === 1 && high % 2 === 1 ? c+1 : c;
}