const temp = setInterval(() => console.log('print every sec'), 1000);
temp;

setTimeout(() => clearInterval(temp), 2004);