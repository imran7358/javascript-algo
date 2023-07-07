function pangram (str) {

    mark = new Array(26).fill(false);
    let index ;

    for(i = 0; i<= str.length; i++){
        if('A' <= str[i] && str[i] <= 'Z'){

            index = str.charCodeAt(i) - 'A'.charCodeAt(0)
        }

        else if('a' <= str[i] && str[i] <= 'z')
        {
            index = str.charCodeAt(i) - 'a'.charCodeAt(0)

        }

        else continue;
        mark[index] = true;
    }

    for( i = 0; i< 26; i++){
        if(mark[i] == false)
        return false;
        
        return   true;
      }
}


let str = "The quick brown fox jumps over the lazy dog";

pangram(str)
if(pangram(str) == true ) {
  
  console.log('Pano')
}

else{
  console.log('no pano')
}