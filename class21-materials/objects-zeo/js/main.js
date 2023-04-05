//Create a stopwatch object that has four properties and three methods
let stopwatch = {}

stopwatch.currentTime = 12
stopwatch.resetTime = 0
stopwatch.color = 'black'
stopwatch.brand = 'stoppywatchy'

stopwatch.Timereset = function(){
     stopwatch.currentTime = stopwatch.resetTime
     return stopwatch.currentTime
    }


stopwatch.colorChange = function(){return stopwatch.color = 'green'}
// stopwatch.changeBrand = function(){ return stopwatch.brand = 'Nike'}
stopwatch.changeBrand = _ => stopwatch.brand = 'green' //same function with no parameter needed so underscore and changes the brand to green.

