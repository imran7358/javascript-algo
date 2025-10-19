
function mergeSorted(arr1, arr2) {
    const merged = []
    let i = 0;
    let j = 0;
    
    while(i < arr1.length && j < arr2.length) {
        merged.push(arr1[i]< arr2[j] ? arr1[i++] : arr2[j++])
    }
    return merged.concat(i < arr1.length ? arr1.slice(i) : arr2.slice(j))
}

console.log(mergeSorted([1, 3, 5], [2, 4, 6])); // [1,2,3,4,5,6]