const arr = [1,2,3,4,5,6]
const strArr = ['a', 'b','c', 'd', 'e']

const newArr = []

for(var i = arr.length - 1 ; i>=0; i--){

  newArr.push(arr[i])
}

console.log(newArr)