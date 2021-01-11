


var convert = function(s, numRows) {
    let newString = "";
    let arr = []
    
    let rowIndex = 0;
    let columnIndex = 0;
    
    for(let i=0; i< numRows; i++){
        arr.push([])
    } 
    
    let direction = 'increase'
    
    for(let i=0; i<s.length; i++){
        arr[rowIndex][columnIndex] = s[i]
        
        if(rowIndex === numRows-1) {
           rowIndex--; 
           columnIndex++; 
           direction = 'decrease'; 
        }  
        else if(rowIndex !== numRows-1 && direction === 'decrease') {
            if (rowIndex === 0) {
                direction = 'increase';
                rowIndex++;
            }
            else {
                rowIndex--;
                columnIndex++;
            }
        }
        else if(rowIndex !== numRows-1 && direction === 'increase'){
            rowIndex++; 
            direction = 'increase'
        }

        
    }
    
    
    
    for(let i=0; i<numRows; i++){
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j]){
                newString += arr[i][j]
            }
        }
    }
    
    
    
    
    return newString
};