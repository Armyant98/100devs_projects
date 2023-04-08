// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

let user = {}

user.name = 'John'
user.surname = 'Smith'

user.name = 'pete'
delete user.name


// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

let schedule = {}
    

let isEmpty = schedule => {
    for (let key in schedule){
        return false
    }
    return true
}

// We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.


function salarySum(salaries){
    sum = 0
    for(key in salaries){
        sum += salaries[key]
    }
    return sum
}

