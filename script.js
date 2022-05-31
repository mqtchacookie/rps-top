let x = ['rock', 'paper', 'scissors']

let computerPlay = (list) => {
	console.log(`${x[Math.floor(Math.random() * list.length)]}`)
}

computerPlay(x)
