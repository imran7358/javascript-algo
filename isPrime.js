function isPrime(n) {
    if (n == 1 || n == 0) return false  // well 1 & 0 not a prime number
    for (var i = 2; i < n; i++) {  // run a loof from 2 to n-1
        if (n % i == 0) {
            return false // if n is divided by i then then n not a prime number
        }
        return true
    }
}

var n = 100;
for (i = 1; i <= n; i++) { // run loop from 1 to N
    if (isPrime(i)) { // check this is prime or not
        console.log(i)
    }
}