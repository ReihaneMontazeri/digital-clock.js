let hour  = document.querySelector('#hour')
let minute = document.querySelector('#minute')
let second = document.querySelector('#seconds')
setInterval(function() {
    let myDate = new Date()

    let newHour = myDate.getHours()
    let newMinutes = myDate.getMinutes()
    let newSecond = myDate.getSeconds()
    if(newHour < 10){
        newHour = '0' + newHour
    }else if(newMinutes < 10){
        newMinutes = '0' + newMinutes
    }else if(newSecond < 10){
        newSecond = '0' + newSecond
    }
    hour.innerHTML = newHour
    minute.innerHTML = newMinutes
    second.innerHTML = newSecond
}, 1000)