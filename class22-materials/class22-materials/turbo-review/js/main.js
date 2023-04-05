// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = "Dr.Pepper"
console.log(favDrink.trim())
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let words = "Hey how are you apple"

let isapple = words.includes("apple")
console.log(isapple)

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function RockPaperScissors(){
    result = Math.floor(Math.random() * 3)
   
    if (result === 0){
        return "rock"
    }else if (result === 1){
        return 'paper'
    }else if (result === 2){
        return "scissors"
    }
    console.log(result)
}





// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function



function checkWinner(player){
    let bot = RockPaperScissors()
    console.log(`bot chose: ${bot}`)
    console.log(`player chose: ${player}`)

    let winner = (player,bot) => (player === 'rock' && bot === 'scissors' ? 'You win' : player === 'scissor' && bot === 'paper' ? 'You win': player === 'paper' && bot === 'rock' ? 'You win': player === bot ? 'You tie' : 'You lose!!')

    console.log(winner(player,bot))
}

checkWinner('rock')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
let playerChoices = ['rock', 'paper', 'scissors','rock', 'paper', 'scissors','rock', 'paper', 'scissors','rock', 'paper', 'scissors']

function ManyGames(playerChoices){
    playerChoices.forEach(choice => checkWinner(choice))
}

ManyGames(playerChoices)