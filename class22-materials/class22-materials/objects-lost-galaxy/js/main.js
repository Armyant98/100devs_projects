//Create a mouse object that has four properties and three methods

let mouse = {

    color : 'black',
    hungry : 'true',
    favoriteSnack : 'cheese',
    tail : 'long',

    eatCheese(){
        return console.log("Yum")
    },

    attack(){
        return console.log("Charge!!")
    },

    Die(){
        return console.log("x_x")
    }


}

let computerMouse = {}

computerMouse.color = 'black'
computerMouse.scroll = 'crunchy'
computerMouse.brand = 'Logitech'

computerMouse.scroll = () => console.log('Spin spin spin')
computerMouse.rightClick = () => console.log('Right Click')
computerMouse.leftClick = () => console.log("Left Click")