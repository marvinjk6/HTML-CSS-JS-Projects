const hoursElement = document.getElementById("hours")
const minutesElement = document.getElementById("minutes")
const secondsElement = document.getElementById("seconds")


function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    hoursElement.innerHTML = h
    minutesElement.innerHTML = m
    secondsElement.innerHTML = s

    setTimeout(()=>{
        updateClock()
    }, 1000)

}

updateClock()