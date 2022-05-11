// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compile
function fabo(n){
    var f1 = 0 , f2 = 1;
    console.log(f1)
    for(i=1; i< n ; i++){
        console.log(f2)
        var next = f1 + f2
        f1 = f2
        f2 = next
    }
    }
    
    fabo(10)
    
    