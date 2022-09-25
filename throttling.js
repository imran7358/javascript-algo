const throttle = ((func, d) => {
    let timer;
    return function (...args) {
        document.getElementById("sub-btn").disabled = true;
        setTimeout(() => {
            func()
        }, d);
    }

})

const myfunction = throttle(() => {
    document.getElementById("sub-btn").disabled = false;
    console.log("User Clicked")

}, 5000)