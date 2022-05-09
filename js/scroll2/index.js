const myDiv = document.getElementById('container');

myDiv.addEventListener('scroll', function() {
    console.log(myDiv.scrollHeight, myDiv.offsetHeight, myDiv.scrollTop);
    if(myDiv.scrollHeight <= myDiv.offsetHeight + myDiv.scrollTop) {
        console.log('uououo');
    }
});