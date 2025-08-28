const findRomanValue = (char) => {  
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;
    for(var i = 0; i< char.length; i++){
        const firstValue = romanNumerals[char[i]]
        const secondValue = romanNumerals[char[i + 1]]
        if(firstValue < secondValue){
            result -= firstValue
        }
        else{
            result += firstValue
        }   
    }                    
        return result


}

console.log(findRomanValue('CLD')) // 1