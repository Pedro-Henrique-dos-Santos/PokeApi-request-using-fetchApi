import { Screen } from "./screen.js"
import { root, container } from "./variables.js"

const response = async function (name = '') {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return await result.json()
}

const namePoke = async function () {
    const res = await response()
    const result = res.results
    let storage = []
    result.forEach(result => {
        storage.push(result.name)

    });
    return storage
}


const app = async function () {
    const name = await namePoke()
    name.forEach(name => {
        response(name).then(general => {
            container.innerHTML += ` <div class="card" style="width: 200px;float:left;clear:clear-both;">
            <div class="card-body">
                <img src="${general.sprites.front_default}">
                <h3 class="card-title">${general.name}</h3>
                <small class="card-paragraph">POKE ID: ${general.id}</small>
            </div>
        </div>`
        })
    })


}

app()














