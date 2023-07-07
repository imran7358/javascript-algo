const string = "Hello Moahhad Imran"
const vowels = {
    'a' : true,
    'e': true,
    'i': true,
    'o': true,
    'u': true
}

let ans= "";
const result = ()=>{
    for (i=0; i<string.length; i++){
        let letter = string[i].toLowerCase();
        if(!vowels[letter]){
              ans +=string[i]
        }
    }
    return ans
}

result()
console.log(ans)