function getPokeData(url) {

  fetch(url).then(function (response) {
    response.json().then(function (pokeData) {
      console.log(pokeData.results)
      const pokeMap = pokeData.results.map(pokemon => {
        return fetch(pokemon.url).then(resData => {
          resData.json().then(pokeJson =>{
            console.log(pokeJson)
            return pokeJson.height
          })


        
          
         // return resData.height
        })
      })


     // console.log(pokeMap)
     // populatePokeCards(pokeData.results)



    })
  })
}

let pokemonGrid = document.querySelector('.pokemonGrid')

getPokeData('https://pokeapi.co/api/v2/pokemon?&limit=25')


function populatePokeCards(pokeArray) {
  pokeArray.forEach(pokemon => {
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', () => pokeCard.classList.toggle('is-flipped'))

    let pokeFront = document.createElement('div')
    pokeFront.className = 'card__face card__face--front'
    pokeFront.textContent = pokemon.name
    let pokeBack = document.createElement('div')
    pokeBack.className = 'card__face card__face--back'
    pokeBack.textContent = 'back'

    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)
    pokemonGrid.appendChild(pokeScene)
  })
}


