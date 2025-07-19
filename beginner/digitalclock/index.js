function getElementsById (id) {
    return document.getElementById(id) || null
}

function formatTimeUnit (time) {
    return time < 10 ? `0${time}` : time
}
 
function getCurrentTime () {
    const now = new Date();
    return {
        hours:now.getHours(),
        minutes:formatTimeUnit(now.getMinutes()),
        seconds:formatTimeUnit(now.getSeconds())
    }
}

function updateClock () {
    const {hours,minutes,seconds} = getCurrentTime();
    getElementsById('hours').innerText = hours;
    getElementsById('minutes').innerText = minutes;
    getElementsById('seconds').innerText = seconds
}



setInterval(updateClock,1000)
updateClock() // Initial Load Update