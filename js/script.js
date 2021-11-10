const board = document.querySelector("#board");

const SQUARES_NAMBER = 550;

for (let i = 0; i < SQUARES_NAMBER; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => {
        setColor(square);
    });

    square.addEventListener("mouseleave", () => {
        removeColor(square);
    });

    board.append(square);
}

function setColor(item) {
    let color = (`rgb(${randomColor()},${randomColor()},${randomColor()})`);

    item.style.backgroundColor = color;
    item.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(item) {
    item.style.backgroundColor = "#1d1d1d";
    item.style.boxShadow = `0 0 2px #000`;
}

function randomColor(min = 0, max = 255) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}