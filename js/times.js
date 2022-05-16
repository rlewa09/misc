for(let i=0; i<10; i++) {
    function timer(i) {
        setTimeout(() => {
            console.log(10-i);
        }, 500*i);
    }
    timer(i)
}

for(let i=0; i<10; i++) {
        setTimeout(() => {
            console.log(10-i);
        }, 500*i);
}