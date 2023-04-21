//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  
  const choice = Math.floor(Math.random() * 83)
  const url = `https://swapi.dev/api/people/${choice}/`
 
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.films)
        data.films.forEach(film =>{
          fetch(film)
          .then(res => res.json())
          .then(films => console.log(films.title))
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

