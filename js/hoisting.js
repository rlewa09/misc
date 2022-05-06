function consoleNum() {
    console.log(num);
    var num = 10;
}

consoleNum() // no error;

function consoleNum() {
    console.log(num);
    let num = 10;
}

consoleNum() // error;