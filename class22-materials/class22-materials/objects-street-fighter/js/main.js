//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeStreetFighter(name, atk, def, stamina){
    this.name = name
    this.atk = atk
    this.def = def
    this.stamina = stamina


    this.punch = () => console.log("Punch")
    this.kick = () => console.log('kick')
    this.block = () => console.log('block')
}

let Maria = new MakeStreetFighter("Maria", 0, 99, -99)
let Anthony = new MakeStreetFighter('Anthony', 99,99,99)

console.log(Maria)
console.log(Anthony)