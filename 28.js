var strStr = function(haystack, needle) {
    if (needle === "") return 0;
    if (haystack==="") return -1;
    
    let firstIndex = 0;
    
    for (let i=0; i<haystack.length; i++){
        let currentHayIndex = i
        for(let j=0; j<needle.length; j++){
            if(haystack[i] !== needle[j]) {
                firstIndex = 0;
                i = currentHayIndex    
            }
            else if(haystack[i] === needle[j]) {
                if (firstIndex === 0) firstIndex = i;
                if (j === needle.length-1) return firstIndex;
                i++;
            };
        } 
    }
    
    return -1
};