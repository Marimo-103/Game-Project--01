//play button click.........
let playGame = document.querySelector(".playGame")
let main = document.querySelector(".main")
let rules = document.querySelector(".rules")

playGame.addEventListener("click", function(){
    rules.style.display = "none"
    main.style.display = "block"
})

// player-01..............
// player name.........
let player1 = document.querySelector(".player1")
let player2 = document.querySelector(".player2")
player2.style.display = "none"


let player1Title = document.querySelector(".player1Title")
let input_label = document.querySelector(".input_label")
let name1Input = document.querySelector(".name1Input")
let button = document.querySelector(".start")
// game start......
let game = document.querySelector(".game")
let number1Input = document.querySelector(".number1Input")
let submitButton = document.querySelector(".submitNumber")
let error1 = document.querySelector(".error1")
game.style.display="none"

// player-02..............
// player name.........
let player2Title = document.querySelector(".player2Title")
let input_label2 = document.querySelector(".input_label2")
let name2Input = document.querySelector(".name2Input")
let button2 = document.querySelector(".start2")
// guess start 
let Guess = document.querySelector(".Guess")
let chances = document.querySelector(".chances")
let count = 5
let number2Input = document.querySelector(".number2Input")
let submitButton2 = document.querySelector(".submitNumber2")
let error2 = document.querySelector(".error2")
let result = document.querySelector(".result")
Guess.style.display="none"

button.addEventListener("click", function(){
    player1Title.innerHTML = name1Input.value,
    name1Input.style.display = "none",
    button.style.display = "none",
    input_label.style.display = "none"
    game.style.display = "block"
})

// take a number..........

submitButton.addEventListener("click", function(){
    if(!number1Input.value) {
        error1.innerHTML = "Input Field Empty!"
    }else if(isNaN(number1Input.value)) {
        error1.innerHTML = "Please Enter a Number!"
    }else if(!(number1Input.value<=10 && number1Input.value>0)) {
        error1.innerHTML = "Please Enter a Number Between 1 to 10!"
    }else {
        error1.style.display = "none"
        player1.style.display = "none"
        player2.style.display = "block"
    }
})

// guess start 
button2.addEventListener("click", function(){
    player2Title.innerHTML = name2Input.value,
    name2Input.style.display = "none",
    button2.style.display = "none",
    input_label2.style.display = "none"
    Guess.style.display = "block"
    chances.innerHTML = `Chances Left: ${count}`
})

submitButton2.addEventListener("click", function(){
    if(!number2Input.value) {
        error2.innerHTML = "Input Field Empty!"
    }else if(isNaN(number2Input.value)) {
        error2.innerHTML = "Please Enter a Number!"
    }else if(!(number2Input.value<=10 && number2Input.value>0)) {
        error2.innerHTML = "Please Enter a Number Between 1 to 10!"
    }else {
        error2.style.display = "none"
        if(count>1) {
            count--
            chances.innerHTML = `Chances Left: ${count}`
            if (number1Input.value==number2Input.value) {
                result.innerHTML = "You WIN :)"
                chances.style.display = "none"
            }
        }else {
            count = 0
            chances.innerHTML = `Chances Left: ${count}`
            result.innerHTML = "You Lose :("
        }
    }
})