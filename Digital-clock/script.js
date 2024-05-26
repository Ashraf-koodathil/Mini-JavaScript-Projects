const secondsEl = document.getElementById('seconds')
const minutesEl = document.getElementById('minutes')
const ampmEl = document.getElementById('ampm')
const hourEl = document.getElementById('hour')
console.log(secondsEl);
console.log(minutesEl);
console.log(ampmEl);
console.log(hourEl);

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"

    if(h > 12){
        h = h-12
        ampm = "PM"
    }
    h =  h < 10 ? '0'+ h : h;
    m = m < 10 ? '0'+ m : m;
    s = s < 10 ? '0'+ s : s;
    hourEl.innerText = h
    minutesEl.innerText = m
    secondsEl.innerText = s
    ampmEl, (innerText = ampm)
    setTimeout(() => {
        updateClock()
    },1000)
}

updateClock()