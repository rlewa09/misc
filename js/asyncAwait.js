const promise = new Promise((resolve, reject) => {
    let value = false;
    if(value) {
        resolve('success');
    } else {
        reject('failure');
    }
})

const result = (async() => {
    try {
        const val = await promise;
        console.log(val);
    } catch (error) {
        console.log(error);
    }
})
result();