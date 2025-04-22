let New = document.querySelector(".new");
let login = document.querySelector(".login");
let form = document.querySelector(".form");
let cpp = document.querySelector(".ok1");
let cpi = document.querySelector(".ok2");
let button = document.querySelector(".button");
let fp= document.querySelector(".fp");
let emailp= document.querySelector(".emailp");
let emaili= document.querySelector(".emaili");
let passwordp= document.querySelector(".passwordp");
let passwordi= document.querySelector(".passwordi");
let eOTP= document.querySelector(".eOTP");


New.addEventListener("click",() => {
    login.innerText = "Sign in";
    form.style.height = "380px";
    cpp.classList.remove("cpp");
    cpi.classList.remove("cpi");
    button.innerText = "Sing in";
    New.classList.add("cpp");
    fp.classList.add("cpp");
})

fp.addEventListener("click",() => {
    login.innerText = "Forget password";
    form.style.height = "220px";
    button.innerText = "Sand OTP";
    emailp.innerText = "e-mail id";
    emaili.placeholder = "enter e-mail id";
    passwordp.classList.add("cpp");
    passwordi.classList.add("cpp");
    New.classList.add("cpp");
    fp.classList.add("cpp");
})

eOTP.addEventListener("click",() => {
    form.style.height = "260px"
    cpp.classList.remove("cpp");
    cpi.classList.remove("cpi");
    button.innerText = "verify OTP";
    cpp.innerText = "Submit OTP";
    cpi.placeholder = "Submit OTP";
})

