const bubbleSort =(arr)=>{
    for(let i = 0; i< arr.length; i++){
      for(let j = i; j< arr.length; j++){
        if(arr[j] > arr[j + 1]){
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp
        }
      }
  
    }
  
    return arr
  
  }
  
  console.log(bubbleSort([4,3,5,8,6]))