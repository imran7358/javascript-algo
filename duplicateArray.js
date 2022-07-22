const arr = [1,2,1,3,4,5,4]
const newArr = []
const result = arr.map  ((item, index)=>{
    if(newArr.indexOf(item) == -1){
        newArr.push(item)
    }
})

console.log(newArr)