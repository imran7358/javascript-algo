
// const flattenArray = (arr) => {
//     return arr.reduce((total, item)=>{
//       if(Array.isArray(item)){
//         total.push(...flattenArray(item))
//       }
//       else{
//         total.push(item)
//       }
//       return total
//     },[])
//  };
//  console.log(flattenArray([1, 2, 3, [4, 5, [6, 7]]]));

// const bubbleSort =(arr)=>{
//   for(let i = 0; i< arr.length; i++){
//     for(let j = i; j< arr.length; j++){
//       if(arr[j] > arr[j + 1]){
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp
//       }
//     }

//   }

//   return arr

// }

// console.log(bubbleSort([4,3,5,8,6]))


// const arr = [1,1,2,3,2,4];
// const t =[]
// const sort = arr.map((n,i)=>{
//   if(t.indexOf(n) == -1){
//     t.push(n)
//   }
// })

// console.log(t)

const greetings = (name, callback) =>{
  console.log('Hello' + ' '+  name)
  callback()
}

const callMe = ()=>{

  console.log("This is Callback")
}

greetings('Kashif', callMe)
>>>>>>> 7252639e7690b7fce19c09ce19bde9b0b23bcdda
