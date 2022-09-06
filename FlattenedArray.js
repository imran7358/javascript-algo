const flattenArray = (arr) => {
    return arr.reduce((total, item)=>{
      if(Array.isArray(item)){
        total.push(...flattenArray(item))
      }
      else{
        total.push(item)
      }
      return total
    },[])
 };
 console.log(flattenArray([1, 2, 3, [4, 5, [6, 7]]]));