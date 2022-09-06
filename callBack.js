// console.log(t)

const greetings = (name, callback) =>{
    console.log('Hello' + ' '+  name)
    callback()
  }
  
  const callMe = ()=>{
  
    console.log("This is Callback")
  }
  
  greetings('Kashif', callMe)

  // When we are paasing a function ad a argument in a fucntion this is called callback.