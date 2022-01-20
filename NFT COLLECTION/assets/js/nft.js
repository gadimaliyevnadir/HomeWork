var button=document.querySelector("#click")
var white=document.querySelector("#white")
var black=document.querySelectorAll(".black")

// for (let i= 0; i < black.length; i++) {
//     var element = black[i];
// }

function myFunction(){
        black.forEach(element => {
        element.classList.toggle("black1")
    });
    white.classList.toggle("white1")
        
     }
