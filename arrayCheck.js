const isArray = input =>{
    if (toString.call(input) === "[object Array]") // comparing input  === array or object
        return true;
    return false;   
}
console.log(isArray ('w3resource'));
console.log(isArray([1,2,3,4]))
