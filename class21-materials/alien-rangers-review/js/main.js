//Arrays

//Create and array of tv shows. Loop through and print each show to the console

let tvShows = ["friends", 'mandalorian', 'The Office', "Parks and Rec"]

tvShows.forEach(show => console.log(show))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

let numbers = [1,2,4,7,0,4,2]

let evenNumebrs = numbers.map(num => num % 2 === 0 ? num : null).filter(Boolean)
console.log(evenNumebrs)

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function secondLowestAndHighest(numbers){
     let numbersInOrder = numbers.sort((a,b) => a-b)
     const secondHighest = numbersInOrder[numbersInOrder.length -2]
     const secondLowest = numbersInOrder[1]
     console.log(numbersInOrder)
     return secondHighest + secondLowest
   
}

alert(secondLowestAndHighest(numbers))  ff