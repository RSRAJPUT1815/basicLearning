let button = document.querySelector(".button");
let otp = document.querySelector(".OTP");

button.addEventListener("click",() => {
    otp.classList.remove("OTP");
    button.innerText= " enter OTP"
})