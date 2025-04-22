let days = document.getElementById('days');
let hours = document.getElementById('hours');
let mins = document.getElementById('mins');
let sec = document.getElementById('sec');


const updateCountDown = (deadline) => {
    const currentTime = new Date();
    const timediff = deadline - currentTime;
    //calculating days , hours ,mins ,sec
    let calcsec = Math.floor(timediff/1000)%60;
    let calcmins = Math.floor(timediff/1000/60)%60;
    let calchours = Math.floor(timediff/1000/60/60)%60;
    let calcdays = Math.floor(timediff/1000/60/60/24);
    
    
    days.textContent = calcdays;
    hours.textContent = calchours;
    mins.textContent = calcmins;
    sec.textContent = calcsec;
}

const countDown = (targetDate) => {
    setInterval(() => updateCountDown(targetDate),1000);
}



// Set the target date here
const targetDate = new Date("month date year hour:min");
// uncomment the line below to start the countdown
// countDown(targetDate); 

