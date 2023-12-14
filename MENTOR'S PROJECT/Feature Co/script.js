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
    var flag = 0
    var navimg  = document.querySelector("#nav-img");
    if(flag == 0){
        navimg.addEventListener("mouseenter",function(){
            navimg.style.backgroundImage = `url("./logo-dark.svg")`
            navimg.style.cursor = "pointer"
            flag = 1
    }
    )}
      
    navimg.addEventListener("mouseleave",function(){
        navimg.style.backgroundImage = `url("./logo.svg")`
}
)
   var lastpic = document.querySelector(".footer-img");

   lastpic.addEventListener("mouseenter",function(){
    lastpic.style.cursor="pointer"
    lastpic.style.backgroundImage =`url("https://assets-global.website-files.com/62bb0a9586616e19ecbb2448/62bc4e41b7429d3f9eab6b0e_logo-dark.svg")`
   });
   lastpic.addEventListener("mouseleave",function(){
    lastpic.style.backgroundImage =`url("./fflogo-white.svg")`
   });




 var cross = document.querySelector(".cr")
//   var mi = document.querySelector(".menu-icon")
  var menubar = document.querySelector(".menu-bar");

menuu.addEventListener("click",function(){
     menubar.style.left = "0%"
})

cross.addEventListener("click",function(){
    menubar.style.left = "-200%"
})
function handleScroll(){
    const scrollY = window.scrollY;
    const rotation = scrollY / 5;
    const spinImage =document.querySelector(".circle-bg");
    spinImage.style.transform = `translate(-50%,-50%) rotate(${rotation}deg)`;
   
}
window.addEventListener("scroll",handleScroll)