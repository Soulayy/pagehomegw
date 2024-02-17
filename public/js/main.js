let mybtn = document.querySelectorAll("button")[1]
let myInput = document.querySelectorAll(".field")[0]

mybtn.addEventListener("click", ()=>{
    myInput.style.display = "flex"
    mybtn.style.display = "none"
})