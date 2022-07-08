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

// Check if round was a win
let playGame = (selectP, selectC, score) => {
	if (round(selectP, selectC) === 'win') return (score = score + 1);
	return score;
};

// Var declaration
let score = 0;
let options = ['rock', 'paper', 'scissors'];
let player = '';

// Button System
let rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
	playGame('rock', computerPlay(options), score);
});

let paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
	playGame('paper', computerPlay(options), score);
});

let scissor = document.querySelector('.scissor');
scissor.addEventListener('click', () => {
	playGame('scissor', computerPlay(options), score);
});

//
