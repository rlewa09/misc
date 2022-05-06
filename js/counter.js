function abc() {
    var x = 1;
    return function() {
        console.log(x);
        x++;
    }
}

abc()()
abc()()
// prints 1 in both cases

function Counter() {
    var count = 0;
    this.incrementCount = function() {
        count++;
        console.log(count);
    }
}

var adder = new Counter();
adder.incrementCount();
adder.incrementCount();

var adder1 = new Counter();
adder1.incrementCount();
adder1.incrementCount();


let next = (function(n){
    return function() {
        n++;
       return n;
    }
}(0));

console.log(next());
console.log(next());