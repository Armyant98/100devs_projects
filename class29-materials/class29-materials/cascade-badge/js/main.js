//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.

let reverseList = list => console.log(list.reverse(' '))

reverseList(['one','two','three'])

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly 
//greater than the sum of the cubes of each element in b.

function compareCubeToSquare(a,b){
    let aSquaredTotal = a.map(num => Math.pow(num,2)).reduce((acc, sum)=> acc + sum, 0 )
    let bCubedTotal = b.map(num => Math.pow(num,3)).reduce((acc, sum)=> acc + sum, 0 )

    if (aSquaredTotal > bCubedTotal){
        return true 
    }
    
    return false
}

let a = [5,5,5,5]
let b = [5,5,5,5]

console.log(compareCubeToSquare(a,b))

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function isMultipleOfIndex(arr) {
    let multiples = arr.map((num,index)=>{
        if (num % index === 0){
            return num
        }
    } )
    multiples = multiples.filter(Number)

    return multiples
}

console.log(isMultipleOfIndex([22, -6, 32, 82, 9, 25]))

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumAnything(arr){
    let sum = arr.reduce((acc,sum)=> Number(acc) + Number(sum), 0)
    return sum
}






console.log(sumAnything([68, -1, 1, -7, 10, 10]))

