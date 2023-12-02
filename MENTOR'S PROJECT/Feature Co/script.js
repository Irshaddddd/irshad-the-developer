var menuu= document.querySelector(".menu-icon");
var line= document.querySelector("#l1");
var line2= document.querySelector("#l2");
menuu.addEventListener("mouseenter",function(){
    line.style.backgroundColor = "#04c75c"
})
menuu.addEventListener("mouseenter",function(){
    line2.style.backgroundColor = "#04c75c"
    })

    menuu.addEventListener("mouseleave",function(){
        line.style.backgroundColor = "#222222"
    })
    menuu.addEventListener("mouseleave",function(){
        line2.style.backgroundColor = "#222222"
})
    


    var just = document.querySelector(".just")
    var pic = document.querySelector("#imageee")
    just.addEventListener("mouseenter",function(){
    pic.style.marginLeft = "-10px"
})
    var just = document.querySelector(".just")
    var pic = document.querySelector(".imageee")
    just.addEventListener("mouseleave",function(){
    pic.style.marginLeft = "0px"   
})

    var justt = document.querySelector(".justt")
    var picc = document.querySelector(".phutu")
    justt.addEventListener("mouseenter",function(){
    picc.style.marginLeft = "10px"
 })
    var justt = document.querySelector(".justt")
    var picc = document.querySelector(".phutu")
    justt.addEventListener("mouseleave",function(){
    picc.style.marginLeft = "0px"
})
        