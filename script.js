let computerPlay = (list) => {
	let move = list[Math.floor(Math.random() * list.length)];
	// console.log(`${move}`)
	return move;
};
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

// Button System
let rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
	console.log('rock');
});

let paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
	console.log('paper');
});

let scissor = document.querySelector('.scissor');
scissor.addEventListener('click', () => {
	console.log('scissor');
});
