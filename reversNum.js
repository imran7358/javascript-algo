function reverseNumber(n) {
    let reversedNum = 0;

    // Handle negative numbers
    let isNegative = n < 0;
    n = Math.abs(n);

    while (n > 0) {
        let digit = n % 10;            // Get the last digit
        reversedNum = reversedNum * 10 + digit;  // Append the digit
        n = Math.floor(n / 10);        // Remove the last digit
    }

    return isNegative ? -reversedNum : reversedNum;  // If negative, return as negative
}

// Example usage
const num = 12345;
console.log(reverseNumber(num));  // Output: 54321

