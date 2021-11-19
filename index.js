document.addEventListener("DOMContentLoaded", () => {
    const btns = [...document.querySelectorAll("button")];
    const char = document.querySelector(".char");

    btns.forEach((button) => {
        button.addEventListener('click', (event) => {
            const interval = setInterval(() => {
                char.classList.toggle("walk");
            }, 150);

            setTimeout(() => {
                clearInterval(interval);
            }, 2000);

            const direction = event.target.classList[0];
            switch (direction) {
                case "up":
                    char.style.top = "50px";
                    break;
                case "sx":
                    char.style.left = "50px";
                    break;
                case "down":
                    char.style.top = "300px";
                    break;
                case "dx":
                    char.style.left = "300px";
                    break;
            }
        });
    });
});