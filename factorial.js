function factorial(num) {
    let factorial = 1;
    for (i = 1; i <= num; i++) {
        console.log("Factorial", factorial)
        console.log(factorial = factorial * i)
    }
    return factorial;
}
factorial(10)
