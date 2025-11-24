const frtName = ['Apple', 'Banaba', 'Cherry'];
const findDiff = 'Banana';
let diffChar = []
const result = frtName.filter((item)=> {
    if(item.length !== findDiff.length) return false;
    let diff = 0
    let diffWord = ''
    
    for(var i = 0; i<item.length; i++){
        console.log()
        if(item[i] !== findDiff[i]){
            diffWord = item[i]
            diff++;
            if(diff > 1) return false;
        }
    }
   if(diff === 1) {
    diffChar.push(diffWord)
    return true;
   }
    return false;
})

console.log(result, diffChar);