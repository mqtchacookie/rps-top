// COMPUTER RNG
let computerPlay = (list) => {
	let move = list[Math.floor(Math.random() * list.length)];
	// console.log(`${move}`)
	return move;
};

// ROUND LOGIC
let round = (pSelect, cSelect) => {
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
let playGame = (selectP, selectC) => {
	if (score === 5) {
		return;
	}
	if (round(selectP, selectC) === 'win') {
		score = score + 1;
		console.log(score);
		return;
	}
	console.log(score);
	return;
};

// Var declaration
let score = 0;
let gameState = false;
let options = ['rock', 'paper', 'scissors'];

// Button System
let rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
	playGame('rock', computerPlay(options));
});

let paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
	playGame('paper', computerPlay(options));
});

let scissor = document.querySelector('.scissor');
scissor.addEventListener('click', () => {
	playGame('scissor', computerPlay(options));
});

// WIN ROUND ELEMENT
let showWinRound = () => {
	let winRound = document.createElement('div');
	winRound.classList.add('winRound');
};


