function sum(a) {
    return function (b) {

        return a + b
    }
}
console.log(sum(1)(3))

var sum1 = function (x) {

    return function (y) {

        if (y) {

            return sum1(x + y)
        }
        return (x)
    }
}

console.log(sum1(1)(2)(3)())