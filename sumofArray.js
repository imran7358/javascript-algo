const arr = [110,18,16,20,25]
const result = arr.reduce((total, num)=>{
    return total - num  
})
console.log(result)

const sumResult = arr.reduce((total, num)=>{

    return total + num
})
console.log(sumResult)