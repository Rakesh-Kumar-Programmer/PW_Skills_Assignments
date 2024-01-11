function factorial(n) {
    // Base case: factorial of 0 is 1
    if (n === 0) {
        return 1;
    } else {
        // Recursive case: n! = n * (n-1)!
        return n * factorial(n - 1);
    }
}

// Test the function with different inputs
console.log(factorial(0));   // Output: 1
console.log(factorial(5));   // Output: 120
console.log(factorial(8));   // Output: 40320
console.log(factorial(10));  // Output: 3628800
