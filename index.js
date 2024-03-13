const inputValue = document.getElementById("value");
const submit = document.getElementById("submit");
const result = document.querySelector("#result")
const refresh = document.getElementById("play-again")
const numberOfClick = document.querySelector(".number-Of-click");
const side = document.querySelector(".side");
let guess = 27;
let click = 5;

function getValue() {
    if (inputValue.value == "") {
        result.innerHTML = "Please enter a number";
    }
    else if (inputValue.value > guess) {
        result.innerHTML = 'Your guess is high'
        result.style.color = 'red'
    }
    else if (inputValue.value < guess) {
        result.innerHTML = "Your guess is low"
        result.style.color = 'blue'
    }
    else if (inputValue.value == guess) {
        result.innerHTML = `You win !!!  Your guess was ${guess}`
        result.style.color = 'green'
        submit.style.display = 'none'
        reload()
    }
}

function clickCounts() {
    click--;
    numberOfClick.textContent = click;
    if (click === 0) {
        refresh.innerHTML = 'Refresh the page to play again'
        submit.style.display = 'none'
        reload()
    }
}

function reload() {
const refresh = document.createElement("button")
refresh.className= 'refresh'
refresh.textContent = 'refresh'
side.appendChild(refresh)
refresh.addEventListener ('click', function() {
    location.reload()
})
}


submit.addEventListener("click", () => {
    clickCounts()
    getValue()
    inputValue.value = ""
})
