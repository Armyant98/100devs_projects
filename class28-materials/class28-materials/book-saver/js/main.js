//page load populate local storage results
if (localStorage.getItem('books')){
  let books = localStorage.getItem('books')
  books = books.split('---')
  for(let i=0; i  <books.length; i++){
  let li = document.createElement('li')
  document.querySelector('#bookList').appendChild(li)
  li.textContent = books[i]
  }
  
}

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`

  if (choice.length !== 10 && choice.length !== 13){
    return alert('Confirm ISBN has 10 or 13 digits')
  }

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(data.details.title)
        console.log(data)
        console.log(data.title)
        if(data.title === undefined){
          alert('Error ISBN not found')
          
        }
        else if(data.title){
          if (localStorage.getItem('books')){
            let books = localStorage.getItem('books') + '---' + data.title
            localStorage.setItem('books', books)
          }
          else {
            localStorage.setItem('books',data.title)
          }
          let li = document.createElement('li')
          document.querySelector('#bookList').appendChild(li)
          li.textContent = data.title
        }
        
        
        
      })
      .catch(err => {
          alert('ISBN not found')
          console.log(`error ${err}`)
      });
}



// 9780980200447