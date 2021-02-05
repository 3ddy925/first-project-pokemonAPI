
let charmanderCard = document.getElementById('charmanderCard');
let charmanderName = document.getElementById('charmanderName');
let charmanderTypeHP = document.getElementById('charmanderTypeHP');
let firstMoveChar = document.getElementById('firstMoveChar');
let secondMoveChar = document.getElementById('secondMoveChar');
let charmanderButton = document.getElementById('charmanderButton');


let squirtleCard = document.getElementById('squirtleCard');
let squirtleName = document.getElementById('squirtleName');
let squirtleTypeHP = document.getElementById('squirtleTypeHP');
let firstMoveSquirtle = document.getElementById('firstMoveSquirtle');
let secondMoveSquirtle = document.getElementById('secondMoveSquirtle');
let squirtleButton = document.getElementById('squirtleButton');

let bulbasaurCard = document.getElementById('bulbasaurCard');
let bulbasaurName = document.getElementById('bulbasaurName');
let bulbasaurTypeHP = document.getElementById('bulbasaurTypeHP');
let firstMoveBulbasaur = document.getElementById('firstMoveBulbasaur');
let secondMoveBulbasaur = document.getElementById('secondMoveBulbasaur');
let bulbasaurButton = document.getElementById('bulbasaurButton');


charmanderButton.addEventListener("click", function(evt) {
    evt.preventDefault()
    fetch('https://pokeapi.co/api/v2/pokemon/charmander')
        .then(response => {
           return response.json()
        })
        .then((data) => {

            charmanderName.textContent = data.name;


        })

    fetch('https://pokeapi.co/api/v2/type/10/')
        .then(response => {
           return response.json()
        })
        .then((data) => {

            charmanderTypeHP.textContent = '50HP' + ' ' + data.name;


        })
        
    fetch('https://pokeapi.co/api/v2/move/10')
        .then(response => {
           return response.json()
        })
        .then((data) => {

            firstMoveChar.textContent = data.name + ' ' + '10dmg';


        })

    fetch('https://pokeapi.co/api/v2/move/52')
        .then(response => {
           return response.json()
        })
        .then((data) => {

            secondMoveChar.textContent = data.name + ' ' + '30dmg';


        })
        
  });

squirtleButton.addEventListener("click", function(evt) {
    evt.preventDefault()

    fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
        .then(response => {
           return response.json()
        })
        .then((data) => {

            squirtleName.textContent = data.name;


        })
        
    fetch('https://pokeapi.co/api/v2/type/11/')
        .then(response => {
           return response.json()
        })
        .then((data) => {

            squirtleTypeHP.textContent = '50HP' + ' ' + data.name;


        })
        
    fetch('https://pokeapi.co/api/v2/move/55')
        .then(response => {
           return response.json()
        })
        .then((data) => {

            firstMoveSquirtle.textContent = data.name + ' ' + '20dmg';


        })

    fetch('https://pokeapi.co/api/v2/move/145')
        .then(response => {
           return response.json()
        })
        .then((data) => {

            secondMoveSquirtle.textContent = data.name + ' ' + '10dmg';


        })
        
        
  });

bulbasaurButton.addEventListener("click", function(evt) {
    evt.preventDefault()

    fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
        .then(response => {
           return response.json()
        })
        .then((data) => {

            bulbasaurName.textContent = data.name;


        })
        
        fetch('https://pokeapi.co/api/v2/type/12/')
        .then(response => {
           return response.json()
        })
        .then((data) => {

            bulbasaurTypeHP.textContent = '50HP' + ' ' + data.name;


        })
        
    fetch('https://pokeapi.co/api/v2/move/75')
        .then(response => {
           return response.json()
        })
        .then((data) => {

            firstMoveBulbasaur.textContent = data.name + ' ' + '10dmg';


        })

    fetch('https://pokeapi.co/api/v2/move/44')
        .then(response => {
           return response.json()
        })
        .then((data) => {

            secondMoveBulbasaur.textContent = data.name + ' ' + '30dmg';


        })
        
  });

charmanderButton.addEventListener("click", function(evt) {
    evt.preventDefault()
    fetch('https://pokeapi.co/api/v2/pokemon/charmander')
        .then(response => {
           return response.json()
        })
        .then((data) => {

            charmanderName.textContent = data.name;


        })

    fetch('https://pokeapi.co/api/v2/type/10/')
        .then(response => {
           return response.json()
        })
        .then((data) => {

            charmanderTypeHP.textContent = '50HP' + ' ' + data.name;


        })
        
    fetch('https://pokeapi.co/api/v2/move/10')
        .then(response => {
           return response.json()
        })
        .then((data) => {

            firstMoveChar.textContent = data.name + ' ' + '10dmg';


        })

    fetch('https://pokeapi.co/api/v2/move/52')
        .then(response => {
           return response.json()
        })
        .then((data) => {

            secondMoveChar.textContent = data.name + ' ' + '30dmg';


        })
        
  });

