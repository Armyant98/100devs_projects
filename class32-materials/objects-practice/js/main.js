// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 

class Contractor {
    constructor(name, role){
        this._name = name
        this._role = role
    }

    get name(){
        return this._name
    }

    get role(){
        return this.role
    }

    sayHello(){
        console.log(`${this._name} says hello, I am a ${this._role} developer at 100 devs`)
    }
}

class Frontend extends Contractor {
    constructor(name,role,program){
        super(name,role)
        this._program = program
    }

    get program(){
        return this._program
    }

    sayHello(){
        console.log(`${this._name} says hello, I am a ${this._role} developer at 100 devs, I use ${this._program}`)
    }
}

class Backend extends Contractor {
    constructor(name,role,program){
        super(name,role)
        this._program = program
    }

    get program(){
        return this._program
    }

    sayHello(){
        console.log(`${this._name} says hello, I am a ${this._role} developer at 100 devs, I use ${this._program}`)
    }
}






// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
let bob = new Contractor('Bob','Front-end')
let simba = new Frontend('Simba','Front-end','React')
let machi = new Backend('The Machine','Back-end','Node')

let agency = [bob,simba,machi]

for(person of agency){
    person.sayHello()
}
