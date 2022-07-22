const arr = [14,18,16,20,25]
const filterArray = []
const result = arr.filter((item,index)=>{
    if(item >= 18){
        filterArray.push(item)
    }
})

console.log(filterArray)
function isPositive(value){
    return value > 0
}
const result1 = arr.filter(isPositive)
console.log(result1)