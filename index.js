const up = document.querySelector("#sopra");
const down = document.querySelector("#sotto");
const right = document.querySelector("#destra");
const left = document.querySelector("#sinistra");
const char = document.querySelector(".char");
const world = document.querySelector(".world")

let worldStart = 0;

up.addEventListener("click", () => {
    char.classList.add("animate__bounce")
    setTimeout(() => { char.classList.toggle("animate__bounce") }, 1000);
})

down.addEventListener("click", () => {
    char.classList.add("animate__bounce")
    setTimeout(() => { char.classList.toggle("animate__bounce") }, 1000);
})

right.addEventListener("click", () => {
    world.style.backgroundPositionX = `${worldStart -= 20}px`;
    char.classList.toggle("char_dir")
})

left.addEventListener("click", () => {
    world.style.backgroundPositionX = `${worldStart += 20}px`;
    char.classList.toggle("char_dir")
})