//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  let choice = document.querySelector('input').value
  choice = choice.split(' ').join('-')
  console.log(choice)
  
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`
  

  fetch(url)
  
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       
        console.log(data)

        const classesList = document.querySelector('#class') //ul list
        const subclassesList = document.querySelector('#subclass') //ul list
        classesList.innerHTML = '' //clear lists from previous fetch
        subclassesList.innerHTML = '' //clear list

        data.classes.forEach(obj =>{ //loop through array and pass in each object 
            let li = document.createElement("li") //create li
            classesList.appendChild(li) //append
            li.textContent = obj.name //append it with the obj name
            
        })

        data.subclasses.forEach(obj =>{
            let li = document.createElement("li")
            subclassesList.appendChild(li)
            li.innerText = obj.name
            
        })

        // document.querySelector('h3').innerText = data.classes[0].name
        // document.querySelector('h4').innerText = data.subclasses[0].name
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

