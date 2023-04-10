//Create a pizza object that has four properties and three methods

let pizza = {}

pizza.crust = 'stuffed'
pizza.toppings = ['pepperoni', 'onions', 'red pepper flakes']
pizza.shape = 'circle'

pizza.cook = function() {
    console.log('sizzle sizzle')
}

pizza.eat = function (){
    console.log('nom nom nom')
}

pizza.rip = function(){
    console.log('*rip slices*')
}

