const result = (array, ele)=>{
if(ele == undefined){
    return array[0]
}
if(ele <= 0){
    return array.slice(0,ele)
}
}
console.log(result([1,2,3,4,5]))
console.log(result([7,8,9,4,11]))