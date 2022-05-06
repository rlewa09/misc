const promise = new Promise((resolve, reject) => {
    let value = false;
    if(value) {
        resolve('success');
    } else {
        reject('failure');
    }
})

promise
.then(
    (succ) => console.log(succ)
)
.catch(
    (err) => console.log(err)
);
