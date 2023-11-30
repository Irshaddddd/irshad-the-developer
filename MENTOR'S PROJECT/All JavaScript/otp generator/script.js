let generatedotp;
let otp1 = document.querySelector("#box1")
let otp2 = document.querySelector("#box2")
let otp3 = document.querySelector("#box3")
let otp4 = document.querySelector("#box4")
document.querySelector("button").addEventListener("click", function () {
    let digit = '0123456789';
    generatedotp = '';
    for (let i = 0; i < 4; i++) {
        generatedotp += digit[Math.floor(Math.random() * 10)];
    }
    otp1.innerHTML = generatedotp[0]
    otp2.innerHTML = generatedotp[1]
    otp3.innerHTML = generatedotp[2]
    otp4.innerHTML = generatedotp[3]
})