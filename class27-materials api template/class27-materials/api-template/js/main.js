//Example fetch using pokemonapi.co


document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  const url = `https://api.nasa.gov/planetary/apod?api_key=VRaRk17xAawGcmEkzsQE1D4nSBNRPKKJN2ZT6Vhh&date=${choice}`  //date is another key and the ampersand allows for another request within the request
  console.log(choice)

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
          document.querySelector('img').src = ''

        }else{
          document.querySelector('img').src = data.hdurl
          document.querySelector('iframe').src = ''
        }
        
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
