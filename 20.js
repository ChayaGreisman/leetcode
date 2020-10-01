//VALID PARENTHESES

function isValid(s) {
    if (s.length === 0) {
        return true;
    }
    
    const stack = [];
    const bracketMap = {
        ")": '(',
        "]": '[',
        "}": '{',
    };
    
    for(let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
		    // add open brackets in the stack
            stack.push(s[i]);
        } else {
		    // remove the latest item in stack if it matches the current closing bracket
            if (stack[stack.length - 1] === bracketMap[s[i]]) {
                stack.pop();
            } else {
                return false;
            }
            
        } 
    }
    // string is valid if all matching brackets are removed from the stack
    return stack.length === 0;
};


//OR

var isValid = function(s) {
    let mapLeft = {
        '{' : 1,
        '[' : 2,
        '(' : 3
    },
        mapRight = {
            '}' : 1,
            ']' : 2,
            ')' : 3
        };
    let stack = [];
    for(let i = 0; i < s.length; ++i) {
        if(mapLeft[s[i]]) {
            stack.push(s[i])
        } else if(!stack.length || mapRight[s[i]] != mapLeft[stack.pop()])
            return false;
    }
    return stack.length ? false : true;
};