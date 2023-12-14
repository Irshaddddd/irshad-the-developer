var firsth1 = document.querySelector("#d1")
var sech1 = document.querySelector("#d2")
var thrdh1 = document.querySelector("#d3")
var line1 = document.querySelector(".des")
var line2 = document.querySelector(".pro")
var line3 = document.querySelector(".exe");
var img = document.querySelector("#imgg");
// var p = document.querySelector("#myP");


sech1.addEventListener("click", function () {
    sech1.style.color = "#fff";
    line1.style.backgroundColor = "#fff"
    line2.style.backgroundColor = "rgb(192, 38, 38)"
    line3.style.backgroundColor = "#fff"
    firsth1.style.color = "rgb(65, 52, 52)"
    thrdh1.style.color = "rgb(65, 52, 52)"
    img.style.backgroundImage = `url("https://images.unsplash.com/photo-1571336572438-3c38fe38f58c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
}
)

thrdh1.addEventListener("click", function () {
    firsth1.style.color = "rgb(65, 52, 52)"
    sech1.style.color = "rgb(65, 52, 52)";
    thrdh1.style.color = "#fff"
    line1.style.backgroundColor = "#fff"
    line2.style.backgroundColor = "#fff"
    line3.style.backgroundColor = "rgb(192, 38, 38)"
    img.style.backgroundImage = `url("https://images.unsplash.com/photo-1568647312519-7350f2a6519d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
}
)


firsth1.addEventListener("click", function () {
    firsth1.style.color = "#fff"
    sech1.style.color = "rgb(65, 52, 52)";
    thrdh1.style.color = "rgb(65, 52, 52)"
    line3.style.backgroundColor = "#fff"
    line2.style.backgroundColor = "#fff"
    line1.style.backgroundColor = "rgb(192, 38, 38)"
    img.style.backgroundImage = `url("https://plus.unsplash.com/premium_photo-1700081738521-a70e0b55f702?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
}
)