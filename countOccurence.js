function countOccurence(str){
    const newStr = str.toLowerCase()
    let freq = {}
    for(let i= 0; i<newStr.length; i++){
        let ch = newStr[i]
        if(freq[ch]) freq[ch]++
        else freq[ch] = 1
    }
    return freq
}
console.log(countOccurence("mohammadImran"))