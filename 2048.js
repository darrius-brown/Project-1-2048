const button = document.querySelector('.button')
const grid = document.querySelector('.grid')
score = 0
occupied = []

startingSquare()
gameMoveNoDefault()


function fixOccupied(chooseSquare) {
    occupied.push(parseInt(chooseSquare.id))
    console.log('fix occupied')}
    

function moveSquare(position, chooseSquare) {
    occupied = occupied.filter(index => index !== parseInt(chooseSquare.id))
    row = Math.floor((position / 4) + 1)
    column = Math.floor((position % 4) + 1)
    chooseSquare.style.gridColumn = `${column}`
    chooseSquare.style.gridRow = `${row}`
    chooseSquare.setAttribute('id',`${position}`)
}
function gameMoveNoDefault() {
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
        gameMoveNoDefault()
    }
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
    moveSquare(randomPlacement, square)
    square.className = ('game-square')
    square.style.backgroundColor = 'red'
    square.style.color = "black"
    square.innerHTML = `${randomValue[value]}`
    grid.appendChild(square)
    occupied.push(randomPlacement) 
}

function pressedKey(event) {
    console.log(occupied)
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
    let removeDups = [...new Set(occupied)]
    occupied = removeDups
    console.log(occupied)
    gameMove()
    scoreBoard = document.querySelector('#score')
    scoreBoard.innerHTML = `Score:${score}`
}

function rightMove(lastColumn) {
    let right2 = document.getElementById(lastColumn - 2)
    let right1 = document.getElementById(lastColumn - 3)
    let right0 = document.getElementById(lastColumn - 4)
        if(occupied.includes(lastColumn - 1)){
        }
        if(occupied.includes(lastColumn - 2)){ 
            if(occupied.includes(lastColumn - 1)) {
                let mergeRight1 = document.getElementById(lastColumn - 1)
                if(right2.innerHTML === mergeRight1.innerHTML)
                    mergeRight(right2, mergeRight1) 
                    fixOccupied(right2)
                } else {
                    moveSquare(lastColumn - 1, right2)
                    fixOccupied(right2)
                }
        }
        if(occupied.includes(lastColumn - 3)){
            if(occupied.includes(lastColumn - 2)) {
                let mergeRight2 = document.getElementById(lastColumn - 2)
                if(right1.innerHTML === mergeRight2.innerHTML)
                mergeRight(right1, mergeRight2)
                fixOccupied(right1)
        } else {
            moveSquare(lastColumn - 2, right1)
            fixOccupied(right1)
            if(occupied.includes(lastColumn - 1)) {
                let mergeRight3 = document.getElementById(lastColumn - 1)
                if(right1.innerHTML === mergeRight3.innerHTML)
                mergeRight(right1, mergeRight3)
                fixOccupied(right1)
            } else {
                moveSquare(lastColumn - 1, right1)
                fixOccupied(right1)
            }
        }
        }

        if(occupied.includes(lastColumn - 4)){
            if(occupied.includes(lastColumn - 3)) {
                let mergeRight4 = document.getElementById(lastColumn - 3)
                if(right0.innerHTML === mergeRight4.innerHTML)
                mergeRight(right0, mergeRight4)
                fixOccupied(right0)
        } else {
            moveSquare(lastColumn - 3, right0)
            fixOccupied(right0)
            if(occupied.includes(lastColumn - 2)) {
                let mergeRight5 = document.getElementById(lastColumn - 2)
                if(right0.innerHTML === mergeRight5.innerHTML)
                mergeRight(right0, mergeRight5)
                fixOccupied(right0)
        } else{
            moveSquare(lastColumn - 2, right0)
            fixOccupied(right0)
            if(occupied.includes(lastColumn - 1)) {
                let mergeRight6 = document.getElementById(lastColumn - 1)
                if(right0.innerHTML === mergeRight6.innerHTML)
                mergeRight(right0, mergeRight6)
                fixOccupied(right0)
        } else{
            moveSquare(lastColumn - 1, right0)
            fixOccupied(right0)
        }           
}}}}
function leftMove(lastColumn) {
    let left2 = document.getElementById(lastColumn + 2)
    let left1 = document.getElementById(lastColumn + 3)
    let left0 = document.getElementById(lastColumn + 4)
    if(occupied.includes(lastColumn + 1)){
    }
    if(occupied.includes(lastColumn + 2)){
        if(occupied.includes(lastColumn + 1)) {
            let mergeLeft1 = document.getElementById(lastColumn + 1)
            if(left2.innerHTML === mergeLeft1.innerHTML)
                mergeRight(left2, mergeLeft1) 
                fixOccupied(left2)
        } else {
            moveSquare(lastColumn + 1, left2)
            fixOccupied(left2)
        }
    }

    if(occupied.includes(lastColumn + 3)){
        if(occupied.includes(lastColumn + 2)) {
            let mergeLeft2 = document.getElementById(lastColumn + 2)
            if(left1.innerHTML === mergeLeft2.innerHTML)
                mergeRight(left1, mergeLeft2) 
                fixOccupied(left1)
    } else {
        moveSquare(lastColumn + 2, left1)
        fixOccupied(left1)
        if(occupied.includes(lastColumn + 1)) {
            let mergeLeft3 = document.getElementById(lastColumn + 1)
            if(left1.innerHTML === mergeLeft3.innerHTML)
                mergeRight(left1, mergeLeft3) 
                fixOccupied(left1)
        } else {
            moveSquare(lastColumn + 1, left1)
            fixOccupied(left1)
        }
    }
    }

    if(occupied.includes(lastColumn + 4)){
        if(occupied.includes(lastColumn + 3)) {
            let mergeLeft4 = document.getElementById(lastColumn + 3)
            if(left0.innerHTML === mergeLeft4.innerHTML)
                mergeRight(left0, mergeLeft4) 
                fixOccupied(left0)
    } else {
        moveSquare(lastColumn + 3, left0)
        fixOccupied(left0)
        if(occupied.includes(lastColumn + 2)) {
            let mergeLeft5 = document.getElementById(lastColumn + 2)
            if(left0.innerHTML === mergeLeft5.innerHTML)
                mergeRight(left0, mergeLeft5) 
                fixOccupied(left0)
    } else{
        moveSquare(lastColumn + 2, left0)
        fixOccupied(left0)
        if(occupied.includes(lastColumn + 1)) {
            let mergeLeft6 = document.getElementById(lastColumn + 1)
            if(left0.innerHTML === mergeLeft6.innerHTML)
                mergeRight(left0, mergeLeft6) 
                fixOccupied(left0)
    } else{
        moveSquare(lastColumn + 1, left0)
        fixOccupied(left0)
    }           
}}}}
function upMove(lastColumn) {
    let up2 = document.getElementById(lastColumn + 5)
    let up1 = document.getElementById(lastColumn + 9)
    let up0 = document.getElementById(lastColumn + 13)
    if(occupied.includes(lastColumn + 1)){
    }

    if(occupied.includes(lastColumn + 5)){
        if(occupied.includes(lastColumn + 1)) {
            let mergeUp1 = document.getElementById(lastColumn + 1)
            if(up2.innerHTML === mergeUp1.innerHTML)
                mergeRight(up2, mergeUp1) 
                fixOccupied(up2)
            } else {
                moveSquare(lastColumn + 1, up2)
                fixOccupied(up2)
            }
    }

    if(occupied.includes(lastColumn + 9)){
        if(occupied.includes(lastColumn + 5)) {
            let mergeUp2 = document.getElementById(lastColumn + 5)
            if(up1.innerHTML === mergeUp2.innerHTML)
                mergeRight(up1, mergeUp2) 
                fixOccupied(up1)
    } else {
        moveSquare(lastColumn + 5, up1)
        fixOccupied(up1)
        if(occupied.includes(lastColumn + 1)) {
            let mergeUp3 = document.getElementById(lastColumn + 1)
            if(up1.innerHTML === mergeUp3.innerHTML)
                mergeRight(up1, mergeUp3) 
                fixOccupied(up1)
        } else {
            moveSquare(lastColumn + 1, up1)
            fixOccupied(up1)
        }
    }
    }

    if(occupied.includes(lastColumn + 13)){
        if(occupied.includes(lastColumn + 9)){
            let mergeUp4 = document.getElementById(lastColumn + 9)
            if(up0.innerHTML === mergeUp4.innerHTML)
                mergeRight(up0, mergeUp4) 
                fixOccupied(up0)
    } else {
        moveSquare(lastColumn + 9, up0)
        fixOccupied(up0)
        if(occupied.includes(lastColumn + 5)) {
            let mergeUp5 = document.getElementById(lastColumn + 5)
            if(up0.innerHTML === mergeUp5.innerHTML)
                mergeRight(up0, mergeUp5) 
                fixOccupied(up0)
    } else{
        moveSquare(lastColumn + 5, up0)
        fixOccupied(up0)
        if(occupied.includes(lastColumn + 1)) {
            let mergeUp6 = document.getElementById(lastColumn + 1)
            if(up0.innerHTML === mergeUp6.innerHTML)
                mergeRight(up0, mergeUp6) 
                fixOccupied(up0)
            //check value of 3
            //merge or dont merge
    } else{
        moveSquare(lastColumn + 1, up0)
        fixOccupied(up0)
    }           
}}}}
function downMove(lastColumn) {
    let down2 = document.getElementById(lastColumn - 5)
    let down1 = document.getElementById(lastColumn - 9)
    let down0 = document.getElementById(lastColumn - 13)
    if(occupied.includes(lastColumn - 1)){
    }

    if(occupied.includes(lastColumn - 5)){
        if(occupied.includes(lastColumn - 1)) {
            let mergeDown1 = document.getElementById(lastColumn - 1)
            if(down2.innerHTML === mergeDown1.innerHTML)
                mergeRight(down2, mergeDown1) 
                fixOccupied(down2)
        } else {
            moveSquare(lastColumn - 1, down2)
            fixOccupied(down2)
        }
    }

    if(occupied.includes(lastColumn - 9)){
        if(occupied.includes(lastColumn - 5)) {
            let mergeDown2 = document.getElementById(lastColumn - 5)
            if(down1.innerHTML === mergeDown2.innerHTML)
                mergeRight(down1, mergeDown2) 
                fixOccupied(down1)
    } else {
        moveSquare(lastColumn - 5, down1)
        fixOccupied(down1)
        if(occupied.includes(lastColumn - 1)) {
            let mergeDown3 = document.getElementById(lastColumn - 1)
            if(down1.innerHTML === mergeDown3.innerHTML)
                mergeRight(down1, mergeDown3) 
                fixOccupied(down1)
        } else {
            moveSquare(lastColumn - 1, down1)
            fixOccupied(down1)
        }
    }
    }
    if(occupied.includes(lastColumn - 13)){
        if(occupied.includes(lastColumn - 9)) {
            let mergeDown4 = document.getElementById(lastColumn - 9)
            if(down0.innerHTML === mergeDown4.innerHTML)
                mergeRight(down0, mergeDown4) 
                fixOccupied(down0)
    } else {
        moveSquare(lastColumn - 9, down0)
        fixOccupied(down0)
        if(occupied.includes(lastColumn - 5)) {
            let mergeDown5 = document.getElementById(lastColumn - 5)
            if(down0.innerHTML === mergeDown5.innerHTML)
                mergeRight(down0, mergeDown5) 
                fixOccupied(down0)
    } else{
        moveSquare(lastColumn - 5, down0)
        fixOccupied(down0)
        if(occupied.includes(lastColumn - 1)) {
            let mergeDown6 = document.getElementById(lastColumn - 1)
            if(down0.innerHTML === mergeDown6.innerHTML)
                mergeRight(down0, mergeDown6) 
                fixOccupied(down0)
    } else{
        moveSquare(lastColumn - 1, down0)
        fixOccupied(down0)
    }           
}}}}
function mergeRight(checkSquare, deletedSquare){
    value = parseInt(checkSquare.innerHTML)
    value += value
    score += value
    checkSquare.innerHTML = `${value}`
    moveSquare(parseInt(deletedSquare.id), checkSquare)
    deletedSquare.remove()
}
button.addEventListener('click', gameMove)
document.addEventListener('keydown', pressedKey)


    