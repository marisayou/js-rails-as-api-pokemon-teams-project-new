const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener("DOMContentLoaded", function(e) {
    getAllTrainers()
    addPokemon()
})

function getAllTrainers() {
    fetch(TRAINERS_URL)
    .then(response => response.json())
    .then(trainers => buildCard(trainers))
}

function buildCard(trainers) {
    const main = document.querySelector("main")
    for (let trainer of trainers) {
        const div = document.createElement("div")
        div.className = "card"
        div.dataset.id = trainer.id

        const p = document.createElement("p")
        p.innerText = trainer.name

        const button = document.createElement("button")
        button.className = "add-pokemon"
        button.dataset.trainerId = trainer.id
        button.innerText = "Add Pokemon"

        const ul = document.createElement("ul")
        const pokemons = trainer.pokemons
        for (const pokemon of pokemons) {
            addSinglePokemon(pokemon)
        }

        div.appendChild(p)
        div.appendChild(button)
        div.appendChild(ul)
        main.appendChild(div)
    }
}

function addSinglePokemon(pokemon) {
    let li = document.createElement("li")
    let button2 = document.createElement("button")
    button2.className = "release"
    button2.dataset.pokemonId = pokemon.id
    button2.innerText = "Release"
    li.innerHTML =`${pokemon.nickname} (${pokemon.species})` 
    li.appendChild(button2)
    ul.appendChild(li)
}

// function addPokemon() {
//     const addPokemonButtons = document.getElementsByClassName("add-pokemon")
//     for (const button of addPokemonButtons) {
//         button.addEventListener("click", )
//     }
// }


