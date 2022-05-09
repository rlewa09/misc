localStorage.setItem('key', 'value');
let data = localStorage.getItem('key');
console.log(data);
localStorage.removeItem('key');

sessionStorage.setItem('key', 'valueSession'); // same as localStorage
let dataSess = sessionStorage.getItem('key');
console.log(dataSess);
sessionStorage.removeItem('key');