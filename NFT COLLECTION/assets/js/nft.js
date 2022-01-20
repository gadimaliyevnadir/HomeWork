var button=document.querySelector("#click")
var white=document.querySelector("#white")
var black=document.querySelectorAll(".black")
var hts=document.querySelector(".hts")


function myFunction(){
        black.forEach(element => {
        element.classList.toggle("black1")
    });
        white.classList.toggle("white1") 
        hts.classList.toggle("hts1")   
     }
