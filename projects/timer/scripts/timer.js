let timer = document.querySelector(".timerok");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");


let sec = 00;
let min = 00;
let minisec = 00;

let timerId = null;

start.addEventListener('click',function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(timeDisplay,10);
})
stop.addEventListener('click',function(){
    clearInterval(timerId);
})
reset.addEventListener('click',function(){
    clearInterval(timerId);
    timer.innerHTML = `00:00:00`;
    minisec = sec = min = 00;
    
})



function timeDisplay(){
    minisec++;
    if(minisec == 100){
        sec++;
        minisec = 00;
        if(sec == 60){
            min++;
            sec = 00;
        }
    }
    let minisecchack = minisec < 10 ? `0${minisec}` : minisec;
    let secchack = sec < 10 ? `0${sec}` : sec;
    let minchack = min < 10 ? `0${min}` : min;
    
    timer.innerHTML = `${minchack}:${secchack}:${minisecchack}`
}

console.log("hi")