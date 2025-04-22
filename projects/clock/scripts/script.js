let hour = document.getElementById("hour");
let sec = document.getElementById("sec");
let min = document.getElementById("min");

function data(){
    let data = new Date();
    let hr = data.getHours();
    let mn = data.getMinutes();
    let sc = data.getSeconds();
    
    let hh = 30*hr + mn/2;
    let mm = 6*mn;
    let ss = 6*sc;
    
    
    hour.style.transform = `rotate(${hh}deg)`;
    min.style.transform = `rotate(${mm}deg)`;
    sec.style.transform = `rotate(${ss}deg)`;
    
}
setInterval(data,1000);
