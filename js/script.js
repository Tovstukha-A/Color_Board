// блок с переменными ======================================================

const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timeEl = document.querySelector("#time");
const board = document.querySelector("#board");

let time = 0;
let score = 0;

// блок с обработчиками событий ============================================

startBtn.addEventListener("click", (event) => {
    event.preventDefault();
    // console.log(screens);
    screens[0].classList.add("up");
});

timeList.addEventListener("click", (event) => {
    if (event.target.classList.contains("time-btn")) {
        time = parseInt(event.target.getAttribute("data-time"));
        screens[1].classList.add("up");
        startGame();
    }
});

board.addEventListener("click", event => {
    if(event.target.classList.contains("circle")) {
        score++;
        event.target.remove();
        createCircle();
    }
});

// блок с функциями =======================================================

function startGame() {
    setInterval(decreaseTime, 1000);
    createCircle();
    setTime(time);
}

function decreaseTime() {
    if (time === 0) {
        finishTime();
    }
    else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current);
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
}

function finishTime() {
    board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`;
    timeEl.parentNode.classList.add("hide");
}

function createCircle() {
    const circle = document.createElement("div");
    const sizeCircle = getRandomCircle(10, 70);
    const {width, height} = board.getBoundingClientRect();
    const x = getRandomCircle(0, width - sizeCircle);
    const y = getRandomCircle(0, height - sizeCircle);
    let colorCircle = (`rgb(${getRandomCircle(0, 255)},${getRandomCircle(0, 255)},${getRandomCircle(0, 255)})`);

    circle.classList.add("circle");
    circle.style.width = `${sizeCircle}px`;
    circle.style.height = `${sizeCircle}px`;
    circle.style.backgroundColor = colorCircle;

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    board.append(circle);
}

function getRandomCircle(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}