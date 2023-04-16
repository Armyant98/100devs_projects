//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  let choice = document.querySelector('input').value
  choice = choice.replace(' ', '_')
  console.log(choice)
  const myNode = document.getElementById("meals");
  myNode.innerHTML = '';
  
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${choice}`
  

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.meals.length)
        for(let i=0; i < data.meals.length; i++){
          let foodImage = document.createElement('img')
          let foodTitle = document.createElement('h3')
          foodImage.id = `img${i}`
          foodImage.src = data.meals[i].strMealThumb
          foodTitle.id = `title${i}`
          foodTitle.innerText = data.meals[i].strMeal
          document.querySelector('#meals').appendChild(foodTitle)

          document.querySelector('#meals').appendChild(foodImage)
          
        }
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
