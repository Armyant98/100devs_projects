//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const poke1 = document.querySelector('#search').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1
  let ability 
  let moves = [] // 4 moves
  document.querySelector('#moves').innerHTML = ''

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#name').innerText = data.name
        document.querySelector('#height').innerText = `Height: ${data.height * 10}cm` //print height to dom
        document.querySelector('#weight').innerText = `Weight: ${data.weight * 100}g` // print weight to dom
        document.querySelector('#moveset').innerText = 'Moveset:'
        //randomize ability based on index and adapt to length of arr

        ability = data.abilities[Math.floor(Math.random() * data.abilities.length)].ability.name 
        document.querySelector('#ability').innerHTML = `Ability: <br> ${ability}` //print ability to dom
        

        //loop through possible moves and randomly select 4 
        for (let i=0; i < 4; i++){
          let move = data.moves[Math.floor(Math.random() * data.moves.length)].move.name
          if(moves.indexOf(move) == -1){
            moves.push(move) // push to variable containing selected moves
          }
          else{
            i -= 1
          }
        }

        //loop through selected moves and append ul with each of the 4 moves
        moves.forEach(move =>{
          let li = document.createElement('li')
          let moveList = document.querySelector('#moves') 
          moveList.appendChild(li)
          li.innerText = move
        })
        console.log(moves)


        //add img to left side of pokedex 

        document.querySelector('#pokemonImg').src = data.sprites.front_default

        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });



      
}