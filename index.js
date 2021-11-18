const up = document.querySelector("#sopra");
const down = document.querySelector("#sotto");
const right = document.querySelector("#destra");
const left = document.querySelector("#sinistra");
const char = document.querySelector(".char");
const world = document.querySelector(".world")

up.addEventListener("click", () =>{
    char.classList.add("animate__slideOutUp")
    setTimeout(() => {char.classList.add("animate__slideOutDown")}, 1000);  
})

down.addEventListener("click", () =>{
    char.classList.add("animate__slideOutDown")
    setTimeout(() => {char.classList.add("animate__slideOutDown")}, 1000);  
})