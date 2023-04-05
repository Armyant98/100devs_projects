//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arrayOfNums = [1,4,5,3,99,2]

function sumOfarr(arr){
    let sum = 0
    arr.forEach((num) => sum += num)
    return sum
}

console.log(sumOfarr(arrayOfNums))

//Other way

let sum = arrayOfNums.reduce((accumulator, currentValue) => accumulator + currentValue, 0 ) // 0 specifies where it starts
alert(sum)


//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function squareOfNums(arr){
    let squaredArray = arr.map(num => Math.pow(num,2))
    return squaredArray
}

console.log(squareOfNums(arrayOfNums))

//Create a function that takes string
//Print the reverse of that string to the console

let string = "Hi Im Paul"

function reverseString(str){
   const arrayStr = str.split('')
   let reversedArray = []
   arrayStr.map(letter => reversedArray.unshift(letter))
   reversedArray = reversedArray.join('')
   return reversedArray

}

console.log(reverseString(string))


//Create a function that takes in a string
//Alert if the string is a palindrome or not
function isPalindrome(str){
    const reversedString = reverseString(str)
    if (reversedString === str){
        alert("Palindroooome")
    }else{
        alert("Not a palindrom")
    }
}

isPalindrome("racecar")