const up = document.querySelector("#sopra");
const down = document.querySelector("#sotto");
const right = document.querySelector("#destra");
const left = document.querySelector("#sinistra");
const char = document.querySelector(".char");
const world = document.querySelector(".world")

let worldStart = 0;

right.addEventListener("click", () =>{
    world.style.backgroundPositionX = `${worldStart-=20}px`;
    char.classList.toggle("char_dir")
    setTimeout(() => {char.classList.toggle("char_dir")}, 200);
    char.classList.remove("back")        
})

left.addEventListener("click", () =>{
    world.style.backgroundPositionX = `${worldStart+=20}px`;
    char.classList.toggle("char_dir")
    setTimeout(() => {char.classList.toggle("char_dir")}, 200);
    char.classList.remove("back")        
})