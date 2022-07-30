
///Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
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