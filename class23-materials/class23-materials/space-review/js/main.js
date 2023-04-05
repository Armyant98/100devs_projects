//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1,6,3,10,5,5]

//my trash way


// function sum(arr){
//     let sum = 0;
//     arr.forEach(num => sum += num)
//     return sum
// }

// console.log(sum(arr))

//leons superior way
alert(arr.reduce((acc, c) => acc + c, 0))  // 0 tells it to start at 0 and as a number in the event that 



//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function square(arr){
    let newArr = arr.map(num => Math.pow(num,2))
    return newArr
}

console.log(square(arr))


//Create a function that takes string
//Print the reverse of that string to the console

let str = "Hi I'm kevin and i am gay"

function reverse(str){
    let split = str.split('')
    let reverse = []
    for(i=0; i < str.length; i++){
        reverse.unshift(split[i])
    }
    reverse = reverse.join('')
    return reverse
    
}

console.log(reverse(str))

//Create a function that takes in a string
//Alert if the string is a palindrome or not
let word = 'nun yay nun'


// function palindrome(word){
//     let forward = word
//     let backward = reverse(word)

//     if (forward === backward){
//         alert('Pallllindrrrooommme')
//     }else{
//         alert('Not a palindrom bruh')
//     }
// }

//better 

palindrome = (str) =>  str === str.split('').reverse().join('') ? "yay palindrome" : 'nooooooo'



alert(palindrome(word))


