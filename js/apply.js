const calc = {
    sum: function(x,y) {
        console.log(this.a + x + y);
    }
}

v = {
    a: 10,
}

calc.sum.apply(v, [10, 5]);
// prints 25