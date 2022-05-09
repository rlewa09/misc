const expensive = () => {
    console.log('expensive');
}

const throttle = function(fn, delay) {
    let flag = true;
    return function() {
        if(flag) {
            fn(arguments[0]);
            flag = false;
        } else {
            setTimeout(() => {
                flag = true;
            }, delay);
        }
    }
}

const func = throttle(expensive, 300);
window.addEventListener('resize', func);