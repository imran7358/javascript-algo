function getData(){
    console.log("GetData")
}

function debounce(func, d){
    let timer;
    return function (...args){
        clearTimeout(timer)
        timer = setTimeout(() => {
            func()
        }, d);
    }

}

const myFunction = debounce(getData, 1000)