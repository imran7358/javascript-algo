const armStrong = (n) =>{
    let temp = n;
    let p =0;
     
    while(n > 0){
        let rem = n % 10;
        p = (p) + (rem * rem * rem)

        n = Math.floor(n / 10)
    }

    if(temp == p){

        console.log("This is armstrog")
    }

    else{
        console.log("This is not an armstrong")
    }
}

armStrong(154)