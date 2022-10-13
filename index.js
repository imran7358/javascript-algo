// let myArray = [{
//   'id': 123,
//   'name': 'apples',
//   'total': 30
// },
// {
//   'id': 541,
//   'name': 'oranges',
//   'total': 42
// },
// {
//   'id': 300,
//   'name': 'bananas',
//   'total': 18
// }
// ]
// console.log(JSON.stringify(myArray.map(a => a.name)))

function sum(a){
  return function(b) {

    return a+b
  }
}
console.log(sum(1)(3))

var sum1 = function (x) {

  return function (y){

    if(y){

      return sum1(x+y)
    }
    return  (x)
  }
}

console.log(sum1(1)(2)(3)())