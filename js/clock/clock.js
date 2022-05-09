setInterval(() => showTime(), 1000);

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let seconds = time.getSeconds();
    let currentTime = hour + ":" + minute + ":" + seconds;
    document.getElementById("clock").innerHTML = currentTime;
}

showTime()