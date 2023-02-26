const buttons = document.getElementsByClassName("button");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log("top");
for (let i = 0; i < buttons.length; i++) {
    let initial = buttons[i].innerText;
    let component = buttons[i].children[1];
    buttons[i].addEventListener("mouseover", function () {
        let iterations = 0;
        const interval = setInterval(() => {
            component.innerText = component.innerText.split("").map((letter, index) => {
                if (index < iterations) {
                    return initial[index];
                }
                return letters[Math.floor(Math.random() * 26)]
            }).join("");
            if (iterations >= initial.length) clearInterval(interval);
            iterations += 0.5;
        }, 20)
    });

    buttons[i].addEventListener("click", function () {
        window.open(component.dataset.link, '_blank')
    })
};

const blob = document.getElementById("blob");

document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    setTimeout(() => {
        blob.style.left = x + "px";
        blob.style.top = y + "px";
    }, 50);
})