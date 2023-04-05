// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

let question = 'hey?'
function checkQuestion(str){
    if(str.includes('?'))
        alert(str)
}





checkQuestion(question)

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let sentence = "Hi I am a Jr. dev and since I am a Jr. dev I feel like I suck at coding"
function jrToEngineer(str){
    let arr = str.split(' ')
    console.log(arr)
    arr.forEach((word, index) =>{
        if(word === 'Jr.'){
            arr[index] = "Software"
        }
        if(word === 'dev'){
             arr[index] = 'Engineer'
        }
    })
    arr = arr.join(' ')
    return arr
}

//better answer 

console.log(sentence.replaceAll('jr. dev', 'software engineering'))

console.log(jrToEngineer(sentence))


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let BotChoice = Math.random()
    if(BotChoice < 0.33){
        return 'rock'
    }
    else if(BotChoice < 0.66){
        return 'paper'
    }
    else {
        return 'scissors'
    }
}


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function CheckWin(playerChoice){
    let Bot = rockPaperScissors()
    if(Bot === 'rock' && playerChoice === 'paper'){
        return 'You win'
    }
    else if(Bot === 'paper' && playerChoice === 'scissors'){
        return 'You win'
    }
    else if(Bot === 'scissors' && playerChoice === 'rock'){
        return 'You win'
    }
    else if(Bot ===  playerChoice){
        return 'You TIIIEDDD'
    }
    else{
        return "You lose!"
    }
}


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function PlayMany(allPlayerchoices){
    allPlayerchoices.forEach(choice => console.log(CheckWin(choice)))
}

PlayMany(['rock', 'paper', 'scissors','rock', 'paper', 'scissors','rock', 'paper', 'scissors','rock', 'paper', 'scissors'])