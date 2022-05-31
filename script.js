let computerPlay = (list) => {
	let move = list[Math.floor(Math.random() * list.length)]
	// console.log(`${move}`)
	return move
}
let round = (pSelect, cSelect, roundNumber) => {
	let lowerCase = pSelect.toLowerCase()

	if (lowerCase === cSelect) {
		console.log('tie')
		return 'tie'
	}
	if (lowerCase === 'rock' && cSelect === 'scissors') {
		console.log('win')
		return 'win'
	}
	if (lowerCase === 'paper' && cSelect === 'rock') {
		console.log('win')
		return 'win'
	}
	if (lowerCase === 'scissors' && cSelect === 'paper') {
		console.log('win')
		return 'win'
	} else {
		console.log('lose')
		return 'lose'
	}
}

let playGame = (selectP, selectC, score) => {
	if (round(selectP, selectC) === 'win') return (score = score + 1)
	return score
}
let score = 0
let options = ['rock', 'paper', 'scissors']

for (let i = 0; i < 5; i++) {
	let choice = prompt('pick: rock paper scissors')
	score = playGame(choice, computerPlay(options), score)
	console.log(score)
}
