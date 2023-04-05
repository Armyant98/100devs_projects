//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function MakeSkater(name, height, weight, race )  {
    this.name = name
    this.height = height
    this.weight = weight
    this.race = race

    this.skate = function(){
        console.log('skurt skurt')
    }

    this.kickflip = function() {
        console.log('flippity flip')
    }

    this.turn = function(direction) {
        console.log(`turn ${direction}`)
    }
}

