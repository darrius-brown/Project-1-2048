const log = document.querySelector('body')
const button = document.querySelector('.button')
const grid = document.querySelector('.grid')
occupied = []
let square0

startingSquare()
function fixOccupied(chooseSquare) {occupied.push(parseInt(chooseSquare.id))}

function moveSquare(position, chooseSquare) {
    occupied = occupied.filter(index => index !== parseInt(chooseSquare.id))
    row = Math.floor((position / 4) + 1)
    column = Math.floor((position % 4) + 1)
    chooseSquare.style.gridColumn = `${column}`
    chooseSquare.style.gridRow = `${row}`
    chooseSquare.setAttribute('id',`${position}`)
}

function gameMove() {
    event.preventDefault()
    //Get random creates column, row, and value for a square
    getRandom()
    const square = document.createElement('div')
    moveSquare(randomPlacement, square)
    square.className = ('game-square')
    square.style.backgroundColor = 'red'
    square.style.color = "black"
    square.innerHTML = `${randomValue[value]}`
    if(occupied.includes(randomPlacement) === false) {
        grid.appendChild(square)
        occupied.push(randomPlacement)
    } else if(occupied.includes(randomPlacement)){
        gameMove()
    }
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
}

function pressedKey(event) {
    if(event.code === `KeyD` || event.code === `ArrowRight`){
        rightMove(4)
        rightMove(8)
        rightMove(12)
        rightMove(16)
    }
    if(event.code === `KeyA` || event.code === `ArrowLeft` ){
        leftMove(-1)
        leftMove(3)
        leftMove(7)
        leftMove(11)
    }
    if(event.code === `KeyW` || event.code === `ArrowUp`){
        upMove(-1)
        upMove(0)
        upMove(1)
        upMove(2)
    }
    if(event.code === `KeyS` || event.code === `ArrowDown`){
        downMove(13)
        downMove(14)
        downMove(15)
        downMove(16)
    }
    gameMove()
}

function rightMove(lastColumn) {
        if(occupied.includes(lastColumn - 1)){
        }

        if(occupied.includes(lastColumn - 2)){
            // let mergeSquare = document.getElementById(lastColumn - 1)
            let right2 = document.getElementById(lastColumn - 2)
            if(occupied.includes(lastColumn - 1) && mergeSquare.innerHTML == right2.innerHTML  ) {
                // mergeRight(right2, mergeSquare) 
                // moveSquare(lastColumn - 1, right2)
                // fixOccupied(right2)
                //check value of 3
                //merge or dont merge
            } else {
                moveSquare(lastColumn - 1, right2)
                fixOccupied(right2)
            }
        }

        if(occupied.includes(lastColumn - 3)){
            // let mergeSquare1 = document.getElementById(lastColumn - 2)
            let right1 = document.getElementById(lastColumn - 3)
            if(occupied.includes(lastColumn - 2) && mergeSquare.innerHTML == right1.innerHTML) {
                // mergeRight(right1, mergeSquare1)
                // moveSquare(lastColumn - 2, right1)
                // fixOccupied(right1)
                //check value of 3
                //merge or dont merge
        } else {
            
            moveSquare(lastColumn - 2, right1)
            fixOccupied(right1)
            if(occupied.includes(lastColumn - 1)) {
                //check value of 3
                //merge or dont merge
            } else {
                moveSquare(lastColumn - 1, right1)
                fixOccupied(right1)
            }
        }
        }

        if(occupied.includes(lastColumn - 4)){
            if(occupied.includes(lastColumn - 3)) {
                //check value of 3
                //merge or dont merge
        } else {
            let right0 = document.getElementById(lastColumn - 4)
            moveSquare(lastColumn - 3, right0)
            fixOccupied(right0)
            if(occupied.includes(lastColumn - 2)) {
                //check value of 3
                //merge or dont merge
        } else{
            moveSquare(lastColumn - 2, right0)
            fixOccupied(right0)
            if(occupied.includes(lastColumn - 1)) {
                //check value of 3
                //merge or dont merge
        } else{
            moveSquare(lastColumn - 1, right0)
            fixOccupied(right0)
        }           
}}}}
function leftMove(lastColumn) {
    if(occupied.includes(lastColumn + 1)){
    }

    if(occupied.includes(lastColumn + 2)){
        if(occupied.includes(lastColumn + 1)) {
            //check value of 3
            //merge or dont merge
        } else {
            let left2 = document.getElementById(lastColumn + 2)
            moveSquare(lastColumn + 1, left2)
            fixOccupied(left2)
        }
    }

    if(occupied.includes(lastColumn + 3)){
        if(occupied.includes(lastColumn + 2)) {
            //check value of 3
            //merge or dont merge
    } else {
        let left1 = document.getElementById(lastColumn + 3)
        moveSquare(lastColumn + 2, left1)
        fixOccupied(left1)
        if(occupied.includes(lastColumn + 1)) {
            //check value of 3
            //merge or dont merge
        } else {
            moveSquare(lastColumn + 1, left1)
            fixOccupied(left1)
        }
    }
    }

    if(occupied.includes(lastColumn + 4)){
        if(occupied.includes(lastColumn + 3)) {
            //check value of 3
            //merge or dont merge
    } else {
        let left0 = document.getElementById(lastColumn + 4)
        moveSquare(lastColumn + 3, left0)
        fixOccupied(left0)
        if(occupied.includes(lastColumn + 2)) {
            //check value of 3
            //merge or dont merge
    } else{
        moveSquare(lastColumn + 2, left0)
        fixOccupied(left0)
        if(occupied.includes(lastColumn + 1)) {
            //check value of 3
            //merge or dont merge
    } else{
        moveSquare(lastColumn + 1, left0)
        fixOccupied(left0)
    }           
}}}}
function upMove(lastColumn) {
    if(occupied.includes(lastColumn + 1)){
    }

    if(occupied.includes(lastColumn + 5)){
        if(occupied.includes(lastColumn + 1)) {
            //check value of 3
            //merge or dont merge
        } else {
            let up2 = document.getElementById(lastColumn + 5)
            moveSquare(lastColumn + 1, up2)
            fixOccupied(up2)
        }
    }

    if(occupied.includes(lastColumn + 9)){
        if(occupied.includes(lastColumn + 5)) {
            //check value of 3
            //merge or dont merge
    } else {
        let up1 = document.getElementById(lastColumn + 9)
        moveSquare(lastColumn + 5, up1)
        fixOccupied(up1)
        if(occupied.includes(lastColumn + 1)) {
            //check value of 3
            //merge or dont merge
        } else {
            moveSquare(lastColumn + 1, up1)
            fixOccupied(up1)
        }
    }
    }

    if(occupied.includes(lastColumn + 13)){
        if(occupied.includes(lastColumn + 9)) {
            //check value of 3
            //merge or dont merge
    } else {
        let up0 = document.getElementById(lastColumn + 13)
        moveSquare(lastColumn + 9, up0)
        fixOccupied(up0)
        if(occupied.includes(lastColumn + 5)) {
            //check value of 3
            //merge or dont merge
    } else{
        moveSquare(lastColumn + 5, up0)
        fixOccupied(up0)
        if(occupied.includes(lastColumn + 1)) {
            //check value of 3
            //merge or dont merge
    } else{
        moveSquare(lastColumn + 1, up0)
        fixOccupied(up0)
    }           
}}}}
function downMove(lastColumn) {
    if(occupied.includes(lastColumn - 1)){
    }

    if(occupied.includes(lastColumn - 5)){
        if(occupied.includes(lastColumn - 1)) {
            //check value of 3
            //merge or dont merge
        } else {
        let down2 = document.getElementById(lastColumn - 5)
            moveSquare(lastColumn - 1, down2)
            fixOccupied(down2)
        }
    }

    if(occupied.includes(lastColumn - 9)){
        if(occupied.includes(lastColumn - 5)) {
            //check value of 3
            //merge or dont merge
    } else {
        let down1 = document.getElementById(lastColumn - 9)
        moveSquare(lastColumn - 5, down1)
        fixOccupied(down1)
        if(occupied.includes(lastColumn - 1)) {
            //check value of 3
            //merge or dont merge
        } else {
            moveSquare(lastColumn - 1, down1)
            fixOccupied(down1)
        }
    }
    }
    if(occupied.includes(lastColumn - 13)){
        if(occupied.includes(lastColumn - 9)) {
            //check value of 3
            //merge or dont merge
    } else {
        let down0 = document.getElementById(lastColumn - 13)
        moveSquare(lastColumn - 9, down0)
        fixOccupied(down0)
        if(occupied.includes(lastColumn - 5)) {
            //check value of 3
            //merge or dont merge
    } else{
        moveSquare(lastColumn - 5, down0)
        fixOccupied(down0)
        if(occupied.includes(lastColumn - 1)) {
            //check value of 3
            //merge or dont merge
    } else{
        moveSquare(lastColumn - 1, down0)
        fixOccupied(down0)
    }           
}}}}
// function mergeRight(checkSquare, deletedSquare){
//     value = parseInt(checkSquare.innerHTML)
//     value += value
//     checkSquare.innerHTML = `${value}`
//     deletedSquare.remove()
// }
button.addEventListener('click', gameMove)
document.addEventListener('keydown', pressedKey)


    