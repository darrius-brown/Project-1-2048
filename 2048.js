const log = document.querySelector('body')
const button = document.querySelector('.button')
const grid = document.querySelector('.grid')
occupied = []
let square0

startingSquare()

function gameMove() {
    event.preventDefault()
    //Get random creates column, row, and value for a square
    getRandom()
    row = Math.floor((randomPlacement / 4) + 1)
    column = Math.floor((randomPlacement % 4) + 1)
    const square = document.createElement('div')
    square.className = ('game-square')
    square.setAttribute('id',`${randomPlacement}`)
    square.style.gridColumn = `${column}`
    square.style.gridRow = `${row}`
    square.style.backgroundColor = 'red'
    square.style.color = "black"
    square.innerHTML = `${randomValue[value]}`
    if(occupied.includes(randomPlacement) === false) {
        console.log('not duplicate')
        grid.appendChild(square)
        occupied.push(randomPlacement)
    } else if(occupied.includes(randomPlacement)){
        gameMove()
        console.log(`duplicate`)
    }
    console.log(occupied)
}

function getRandom() {
    randomPlacement = Math.floor(Math.random() * 16)
    value = Math.floor(Math.random() * 2)
    randomValue = [2, 4]
}

function startingSquare() {
    getRandom()
    const square = document.createElement('div')
    square.className = ('game-square')
    square.setAttribute('id',`0`) //set 0 to randomPlacement
    square.style.gridColumn = `1` // set 1 to column
    square.style.gridRow = `1` //set 1 to row
    square.style.backgroundColor = 'red'
    square.style.color = "black"
    square.innerHTML = `${randomValue[value]}`
    grid.appendChild(square)
    occupied.push(0)   //set 0 to occupied
    console.log(occupied)
    console.log(square)
}
//KeyCodes: KeyW KeyA KeyS KeyD ArrowUp ArrowDown ArrowLeft ArrowRight
function pressedKey(event) {
    console.log(event.code)
    if(event.code === `KeyD`){
        square0 = document.getElementById('0')
        console.log(square0)
        square0.style.gridColumn = 4
        square0.style.gridRow = 1
        square0.setAttribute('id',`3`)
    }
  }
button.addEventListener('click', gameMove)


document.addEventListener('keydown', pressedKey)

