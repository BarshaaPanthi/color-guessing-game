let numSquares = 6;
let colors = [];
let pickedColor;
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.getElementById("message");
const resetButton = document.getElementById("reset");

// Initialize the game
function init() {
    setupSquares();
    reset();
}

// Add click  to each square
function setupSquares() {
    squares.forEach((square, index) => {
        square.addEventListener("click", function() {
            const clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    });
}

// Reset the game with new colors
function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    squares.forEach((square, index) => {
        if (colors[index]) {
            square.style.display = "block";
            square.style.backgroundColor = colors[index];
        } else {
            square.style.display = "none";
        }
    });
}

// Change the colors of all squares to the correct one
function changeColors(color) {
    squares.forEach(square => {
        square.style.backgroundColor = color;
    });
}

// Pick a random color from the array
function pickColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// Generate an array of random colors
function generateRandomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

// Generate a random RGB color
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Reset button 
resetButton.addEventListener("click", function() {
    reset();
});

// Start the game
init();
