const myData = {
    name: 'Rajat',
    city: 'Delhi',
    displayStay: function () {
        console.log(this.name, 'stays in', this.city);
    }
}

myData.displayStay();

const otherData = {
    name: 'Baba',
    city: 'Chennai'
}

myData.displayStay.call(otherData);