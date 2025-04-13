const board = document.getElementById('board');
const scoreBoard = document.getElementById('scoreBoard');
const startButton = document.getElementById('start');
const gameOverSign = document.getElementById('gameOver');

const boardSize = 10; // 10x10 board
const gameSpeed = 100; // Game speed in milliseconds
const squareTypes = {
    emptySqueare: 0,
    snakeSquare: 1,
    foodSquare: 2
};
const directions = {
    ArrowUp: -10,
    ArrowDown: 10,
    ArrowRight: 1,
    ArrowLeft: -1,
};

// Game variables
let snake;
let score;
let direction;
let boardSquares;
let emptySquares;
let moveInterval;

const setGame = () => {
    snake = ['00', '01', '02', '03']; // Initial snake positions
    score = snake.length;
    direction = 'ArrowRight'; // Initial direction
    boardSquares = Array.from(Array(boardSize), () => new Array(boardSize).fill(squareTypes.emptySquare));
    console.log(boardSquares);
    board.innerHTML = '';
    emptySquares = [];
    createBoard();
}

const startGame = () => {
    setGame();
}

startButton.addEventListener('click', startGame);