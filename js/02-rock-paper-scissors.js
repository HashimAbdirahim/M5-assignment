// GLOBAL VARIABLE
let userChoice
let computerChoice

// step 1
do{
userChoice = prompt('Choose between rock, paper, scissors? (rock/paper/scissors)')
userChoice = userChoice.toLowerCase()
console.log(userChoice)
console.log(typeof(userChoice))
} while((userChoice != 'rock') && (userChoice != 'paper') && (userChoice != 'scissors'));

//step 2,3
computerChoice = Math.round(Math.random()*2)
switch (computerChoice){
    case 0:
        computerChoice = 'rock'
        break;
    case 1:
        computerChoice = 'paper'
        break;
    case 2:
        computerChoice = 'scissors'
        break;
}

//step 4,5
if (userChoice === computerChoice) {
    alert(`You are tied! No Winner!`)
} else if(userChoice === 'rock'){
    if (computerChoice === 'paper') {
        alert('Paper covers rock. You Lose!')
    } else if (computerChoice === 'scissors'){
        alert('Rock destroys scissors. You Win!')
    }
}else if(userChoice === 'paper'){
    if (computerChoice === 'rock') {
        alert('Paper covers rock. You Win!')
    } else if (computerChoice === 'scissors'){
        alert('Scissors cut paper. You Lose!')
    }
}else if(userChoice === 'scissors'){
    if (computerChoice === 'rock') {
        alert('Rock destroys scissors. You Lose!')
    } else if (computerChoice === 'paper'){
        alert('Scissors cut paper. You Win!')
    }
}
