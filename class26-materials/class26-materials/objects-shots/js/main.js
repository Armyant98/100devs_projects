//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM



function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + choice


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then((data) => {
        console.log(data)
        document.querySelector('h2').innerText = data.drinks[i].strDrink
        document.querySelector('img').src = data.drinks[i].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[i].strInstructions
        document.querySelector('p').innerText = data.drinks[i].strIngredient1
        drinks = data.drinks
        
      
        
   
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}

let drinks = undefined 
let i = 0
let getCocktail = document.querySelector('#search')
let nextCocktail = document.querySelector('#next')
let backCocktail = document.querySelector('#back')

getCocktail.addEventListener('click', getFetch)
nextCocktail.addEventListener('click', function(){
  if(i < drinks.length - 1){
    i++
    backCocktail.classList.remove('hidden')
    getFetch()
  }
  if (i=== drinks.length -1){
    nextCocktail.classList.add("hidden")
    getFetch()
  }
  
})

backCocktail.addEventListener('click', function(){
  if(i < drinks.length){
    nextCocktail.classList.remove("hidden")
    getFetch()
  }
  if(i>0){
    i--
    getFetch()
  }
  if (i===0){
    backCocktail.classList.add('hidden')
    getFetch()
  }
  
})




// const cocktail = data.drinks[0];
//       const cocktailDiv = document.getElementById("cocktail");
//       // cocktail name
//       // const cocktailName = cocktail.strDrink;
//       // const heading = document.createElement("h1");
//       // heading.innerHTML = cocktailName;
//       // cocktailDiv.appendChild(heading);
//       // // cocktail image
//       // const cocktailImg = document.createElement("img");
//       // cocktailImg.src = cocktail.strDrinkThumb;
//       // cocktailDiv.appendChild(cocktailImg);
//       // document.body.style.backgroundImage = "url('" + cocktail.strDrinkThumb + "')";
//       // // cocktail ingredients
//       let getIngredients = Object.keys(cocktail)
        
//       getIngredients = getIngredients.filter(function (ingredient) {
//           return ingredient.indexOf("strIngredient") !== -1;
//         })
// console.log(getIngredients)