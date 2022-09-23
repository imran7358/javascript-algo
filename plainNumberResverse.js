var arr = 12345;
var newArr = []
function convertIn(num){
  return Number(num)
}
let myFunc = num => Number(num);
var intArr = Array.from(String(arr), convertIn);
for(var i = intArr.length - 1 ; i>=0;  i--){
 newArr.push(intArr[i])
}
console.log(newArr)