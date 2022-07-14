// Var declaration
let score = 0;
let gameState = false;
let options = ['rock', 'paper', 'scissors'];
const content = document.querySelector('.content');
const selections = document.querySelector('.selections');
const resultDisplay = document.querySelector('.result-display');

// COMPUTER RNG
const computerPlay = (list) => {
	let move = list[Math.floor(Math.random() * list.length)];
	// console.log(`${move}`)
	return move;
};

// ROUND LOGIC
const round = (pSelect, cSelect) => {
	let lowerCase = pSelect.toLowerCase();

	if (lowerCase === cSelect) {
		console.log('draw');
		return 'draw';
	}
	if (lowerCase === 'rock' && cSelect === 'scissors') {
		console.log('win');
		return 'win';
	}
	if (lowerCase === 'paper' && cSelect === 'rock') {
		console.log('win');
		return 'win';
	}
	if (lowerCase === 'scissors' && cSelect === 'paper') {
		console.log('win');
		return 'win';
	} else {
		console.log('lose');
		return 'lose';
	}
};

// WIN/DRAW/LOSS RETURN
const playGame = (selectP, selectC) => {
	if (score === 5) {
		winGame();
		return;
	}
	if (round(selectP, selectC) === 'win') {
		score = score + 1;
		console.log(score);
		showWinRound();
		return;
	}
	if (round(selectP, selectC) === 'draw') {
		console.log(score);
		showDrawRound();
		return;
	}
	showLoseRound();
	console.log(score);
	return;
};

// Button System
const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
	playGame('rock', computerPlay(options));
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
	playGame('paper', computerPlay(options));
});

const scissor = document.querySelector('.scissor');
scissor.addEventListener('click', () => {
	playGame('scissor', computerPlay(options));
});

// WIN ROUND ELEMENT
const showWinRound = () => {
	let winRound = document.createElement('div');
	winRound.classList.add('win-round');
	winRound.textContent = 'WIN';
	resultDisplay.append(winRound);
};

// DRAW ROUND ELEMENT
const showDrawRound = () => {
	let drawRound = document.createElement('div');
	drawRound.classList.add('draw-round');
	drawRound.textContent = 'DRAW';
	resultDisplay.append(drawRound);
};

// LOSE ROUND ELEMENT
const showLoseRound = () => {
	let loseRound = document.createElement('div');
	loseRound.classList.add('lose-round');
	loseRound.textContent = 'LOSE';
	resultDisplay.append(loseRound);
};

const winGame = () => {
	let winGame = document.createElement('div');
	winGame.classList.add('win-game');
	winGame.textContent = 'WINNER';
	winGame.setAttribute('style', 'color: aliceblue');
	content.removeChild(selections);
	content.removeChild(resultDisplay);
	content.append(winGame);
};
