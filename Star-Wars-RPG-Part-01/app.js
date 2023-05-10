function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(function(){
        return Math.floor(Math.random() * 6) + 1
    })
}

function getDiceHtml(diceCount) {
    return getDiceRollArray(diceCount).map(function(num){ 
        return  `<div class="dice">${num}</div>`
    }).join('')
}


const lightSide = {
    elementId: "light-side",
    name: "rebellion",
    avatar: "/images/rey.png",
    health: 60,
    diceCount: 3
}

const darkSide = {
    elementId: "dark-side",
    name: "first order",
    avatar: "/images/stormtrooper.jpg",
    health: 10,
    diceCount: 1
}

function renderCharacter(data) {
    const {elementId, name, avatar, health, diceCount} = data;
    const diceHtml = getDiceHtml(diceCount)
    
    
    document.getElementById(elementId).innerHTML = 
        `<div class="character-card">
            <h2 class="name"> ${name} </h2>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">
                ${diceHtml}
            </div>
        </div>`   
}

renderCharacter(lightSide);
renderCharacter(darkSide);