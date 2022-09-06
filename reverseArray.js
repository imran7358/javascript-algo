const oldArray = [1, 2, 3, 4, 5]
const reverseArrayy = []
console.log("Old Array", oldArray)
for (let i = oldArray.length - 1; i >= 0; i--) {
    reverseArrayy.push(oldArray[i])
}
console.log("Reverse Array", reverseArrayy)