# CHALLENGES

## Challenge: 01 Render Character Cards in JS

1. Take the hard-coded HTML for the Wizard card, bring it into index.js and then inject it back into its div with JavaScript.
2. Do the same for Orc card. 

## CHALLENGE 02: The renderCharacter() function

1. Strip out the hero and monster data (element id, name, avatar, health and dice score) and store them in variables

2. Write a renderCharacter() function that accepts the 5 new variables as paramaters and renders out a character with this data

3. Call renderCharacter() twice. Once with the hero variables and once with the monster variables to that both are rendered

## CHALLENGE 03: Convert Consts Into Two Objects

1. Convert our consts into two objects called "monster" and "hero".
2. Update the renderCharacter() function so that it accepts a single object "data" as its parameter instead of five string/numbers, reducing the number of arguments to pass in from five to one.
3. Update the template now each variable is coming from "data".
4. Update the function call.

```js

let user = {        // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
}

```

## CHALLENGE 04: Destructure the Data Object

1. Deconstruct the data object 
2. Update the template string as necessary

## CHALLENGE 05: Render Multiple Dice

1. declare a let called diceHtml and initialize it with an empty string. 
2. Use a for loop to update diceHtml so that it contains the HTML for our dice. The number of dice needed is specificed in the diceCount property of the objects.
3. Each dice should have the following HTML: 

```html 
    <div class="dice">6</div>
```

4. For now, each dice will display 6
5. Swap out the diceRoll variable for diceHtml in the template

## CHALLENGE 06: Update for Loop

Update this for loop so it uses a value from the new diceRoll array to render out the dice so the wizard's dice have values of 3, 1 and 4, and the orc's single dice has a value of 2.

## CHALLENGE 07: Replace for Loop with map

1. Instead of the for loop, map over the diceRoll array and save the new array to diceHTML.
2. Remember to deal with the commas between dice.
3. What keyword should be used to declare diceHTML? 

## Challenge 08: Generate Random Value for Dice

1. Create a function called getDiceRollArray that uses a for loop to return an array of random numbers between 1-6. 
2.  The function should have diceCount as a parameter and the array it returns should be diceCount length.
3.  For testing purposes, call the function with a diceCount of 3 and log out the result. 
check out hint.md for extra help!

### Hints: These will be useful:

    1. Math.random() - will generate a random number between 0 and 1 but not inclusive of 1.
    2. Math.floor() - will round a number down to the nearest integer

## Challenge 09: Render Dice With Random Numbers

1. Create a function called getDiceHtml. 
2. getDiceHtml should map over the array of dice rolls returned from getDiceRollArray to generate the html we need to render our dice with random values. This is the HTML: 
```js

`<div class="dice">DICE VALUE HERE</div>`

```
3. Think about the parameters and arguments!
4. Down in renderCharacter(), set diceHtml equals to our new getDiceHtml function. Remember to give it the argument it needs. 
5. Delete any code we no longer need.

### Hints: 
    1. Your function should take in diceCount as a parameter.
    2. It should then return the array it gets by calling 
    getDiceRollArray(). Remember to use as an argument.
    3. There's no need to set up a new variable - you can map 
    over the array returned by getDiceRollArray directly to 
    return the html template for each dice.
    
Changed/Deleted:

```js

function getDiceRollArray(diceCount){
    const newDiceRolls = []
    for(let i = 0; i < diceCount; i++){
        newDiceRolls.push(Math.floor(Math.random() *6 ) + 1)
    }
    return newDiceRolls
}

getDiceRollArray(3)

```

## Note: Chaining .fill() and .map() Onto a New Array

```js 

const poisonMushrooms = new Array(10).fill('🍄').map(function(mushroom){
    return `<div class="box">${mushroom}</div>`
}).join('')

document.getElementById('mushrooms').innerHTML = poisonMushrooms

```

```css

.mushroom-container{
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    padding: 20px;
}

.box{
    padding: 20px;
    border: 3px solid skyblue;
    border-radius: 5px; 
}

```

```html

<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <div class="mushroom-container" id="mushrooms"></div>
        <script src="index.pack.js"></script>
    </body>
</html>

```

## Challenge 10: Use Array Constructor Instead of for Loop 

1. Instead of the for loop, use an Array constructor to create a new array which is diceCount length.
2. Fill the new array with zeros as its initial state.
3. Map over the new array directly (no need to declare a new variable) and return a random number from 1-6 in each element.
4. Delete all unnecessary code.
