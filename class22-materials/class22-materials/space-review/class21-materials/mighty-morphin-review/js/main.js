// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = "easter"
favHoliday='christmas'
console.log(favHoliday.toUpperCase)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let friend = 'Maria'
alert(friend.slice(friend.length-3))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subtractFiveFrom100(num1,num2,num3,num4,num5){
    let difference = 100-num1-num2-num3-num4-num5;
    alert(Math.abs(difference))
}

subtractFiveFrom100(5,7,5,2,1)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function lowestAndHighest(num1,num2,num3){
    let numbers=[num1,num2,num3];
    const lowest = Math.min(...numbers)
    const highest= Math.max(...numbers)

    console.log(lowest,highest)
}

lowestAndHighest(100,5,2)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

// function coinFlip(){
//     let coin =Math.round(Math.random(1,2))
//     if (coin === 1) {
//         return "heads"
//     }
//     else {
//         return "tails"
//     }

// }

const coinFlip = _ => Math.random() < .5 ? 'heads' : 'tails'

console.log(coinFlip())


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function severalCoinFlips(flips){
    fliplog = []
    for(let i=0; i < flips; i++){
        let coin =Math.round(Math.random(1,2))
        if (coin === 1) {
            fliplog.push("heads")
        }
        else {
            fliplog.push("tails")
        }

    }

    return fliplog
    

}

console.log(severalCoinFlips(100))
