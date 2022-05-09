const getText = (e) => {
    console.log(e);
    console.log(e.target.value);
}

const debounce = (fn, delay) => {
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(arguments[0])
        }, delay);
    }
}

const test = function(arguments) {
    getText(arguments);
}

const inputElement = document.getElementById('text');

inputElement.addEventListener('keyup', debounce(getText, 300));

// inputElement.addEventListener('keyup', test);