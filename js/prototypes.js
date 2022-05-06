const object = {
    city: 'Guntur',
    name: 'John',
    calc: function(x,y) {
        console.log(x + y);
    }
}

const object2 = {
    name: 'Baba'
}

object2.__proto__ = object;

console.log(object2.name) // Baba
console.log(object2.city) // Guntur