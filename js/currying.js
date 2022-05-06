const addNum = (x) => {
    return (y) => {
        console.log(x + y);
    }
}

const add = function(x) {
    return function(y) {
        console.log(x + y);
    }
}

addTwo = addNum(2);
addTwo(3);

a1 = add(2);
a1(4);