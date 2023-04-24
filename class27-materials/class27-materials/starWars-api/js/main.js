//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  
  const choice = Math.floor(Math.random() * 83)
  const url = `https://swapi.dev/api/people/${choice}/`
  document.getElementById('charFilms').innerHTML = ''
 
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.getElementById('charName').innerText = (data.name)
        data.films.forEach(film =>{
          fetch(film)
          .then(res => res.json())
          .then(films => {
            const node = document.createElement("li");
            const textnode = document.createTextNode(films.title)
            node.appendChild(textnode)
            console.log(node)
            document.getElementById('charFilms').appendChild(node)
            
          })
          .catch(err => console.log(`error ${err}`))
        })
        fetch(data.homeworld)
          .then(res => res.json())
          .then(world => console.log(world.name))
          .catch(err => console.log(`error ${err}`))
        
        


      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

