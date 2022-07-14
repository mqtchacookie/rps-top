// Var declaration
let score = 0;
let gameState = false;
let options = ['rock', 'paper', 'scissors'];
const content = document.querySelector('.content');

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
		console.log('tie');
		return 'tie';
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
		return;
	}
	if (round(selectP, selectC) === 'win') {
		score = score + 1;
		console.log(score);
		showWinRound();
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
	winRound.classList.add('winRound');
	winRound.textContent = 'WIN';
	content.append(winRound);
};

// DRAW ROUND ELEMENT
const showDrawRound = () => {
	let drawRound = document.createElement('div');
	drawRound.classList.add('drawRound');
	drawRound.textContent = 'DRAW';
	content.append(drawRound);
};

// LOSE ROUND ELEMENT
const showLoseRound = () => {
	let loseRound = document.createElement('div');
	loseRound.classList.add('loseRound');
};
