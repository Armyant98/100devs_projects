//Example fetch using pokemonapi.co

const list = document.getElementById('charFilms')
document.querySelector('button').addEventListener('click', clearList(list))
document.querySelector('button').addEventListener('click', getFetch)


function clearList() {
  const list = document.getElementById('charFilms')
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}



function getFetch(){
  
  const choice = Math.ceil(Math.random() * 83)
  console.log(choice)
  const url = `https://swapi.dev/api/people/${choice}/`
  document.getElementById('charFilms').innerHTML = ''
  if (choice === 17){
    getFetch()
  }
 
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.getElementById('charName').innerText = data.name 
        document.getElementById('charSex').innerText = data.gender
        document.getElementById('charMass').innerText = data.mass + ' Kg'
        document.getElementById('charHeight').innerText = data.height + ' cm'
        document.getElementById('charBirthYear').innerText = data.birth_year

        data.films.forEach(film =>{
          fetch(film)
          .then(res => res.json())
          .then(films => {
            const node = document.createElement("li");
            const textnode = document.createTextNode(films.title)
            node.appendChild(textnode)
            document.getElementById('charFilms').appendChild(node)
            
          })
          .catch(err => console.log(`error ${err}`))
        })
        fetch(data.homeworld)
          .then(res => res.json())
          .then(world => document.getElementById('charHomeworld').innerText = world.name)
          .catch(err => console.log(`error ${err}`))
        
        


      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

