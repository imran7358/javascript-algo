const balanceParanthesis = (str)=>{
    const stack = [];
    let result = '';

    for (let char of str) {
        if (char === '(') {
            stack.push('(');
            result += char;
        } else if (char === ')') {
            if (stack.length > 0) {
                stack.pop(); // matched opening
                result += char;
            }
            // Else skip unmatched closing ')'
        }
    }

    // Add remaining unmatched opening '(' as closing ')'
    result += ')'.repeat(stack.length);

    return result;
}

console.log (balanceParanthesis('(()(('));