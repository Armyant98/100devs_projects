//Create a constructor with 4 properties and 3 methods
function MakePizza(crust, toppings, shape, sauce ) {
    this.crust = crust,
    this.toppings = toppings,
    this.shape = shape,
    this.sauce = sauce,

    this.cook = function() {
        console.log('sizzle sizzle')
    }
    
    this.eat = function (){
        console.log('nom nom nom')
    }
    
    this.rip = function(){
        console.log('*rip slices*')
    }


}