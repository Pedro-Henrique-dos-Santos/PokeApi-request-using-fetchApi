export { Screen }
class Screen {
    constructor(name, abilities, sprites) {
        this.name = name
        this.abilities = abilities
        this.sprites = sprites
    }

    render() {
        container.innerHTML += `<div class="card mt-4" style="width: 200px;">
        <div class="card-body bg-info-subtle">
            <img src="${this.sprites}" class="card-img-top">
            <h2 class="card-title">${this.name}</h2>
            <span class="card-text">${this.abilities}</span>
        </div>

    </div>`
    }

}

