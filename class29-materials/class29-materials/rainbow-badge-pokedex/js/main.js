//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const poke1 = document.querySelector('#search').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1
  let ability 
  let moves = [] // 4 moves
  

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#name').innerText = data.name
        document.querySelector('#height').innerText = `Height: ${data.height * 10}cm` //print height to dom
        document.querySelector('#weight').innerText = `Weight: ${data.weight * 100}g` // print weight to dom
        ability = data.abilities[Math.floor(Math.random() * data.abilities.length)].ability.name //randomize ability based on index and adapt to length of arr
        document.querySelector('#ability').innerText = `Ability: ${ability}` //print ability to dom
        
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });



      
}