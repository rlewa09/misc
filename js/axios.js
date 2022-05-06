axios.put('/user_login', {
    userName: 'John',
    password: 'blue'
})
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error);
})