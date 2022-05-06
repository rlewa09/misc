const calc = {
    sum: function(x, y) {
        console.log(this.a + x + y);
    }
}

v = {
    a: 10
}

const calcSum = calc.sum.bind(v);

calcSum(10, 5);
// prints 25