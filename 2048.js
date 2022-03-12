const log = document.querySelector('body')
const button = document.querySelector('.button')
const grid = document.querySelector('.grid')
occupied = []
let square0

startingSquare()
console.log(occupied)
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
}
//KeyCodes: KeyW KeyA KeyS KeyD ArrowUp ArrowDown ArrowLeft ArrowRight
function pressedKey(event) {
    console.log(event.code)
    if(event.code === `KeyD`){
        //Row 1
        if(occupied.includes(3)){
            console.log("hello3")
        }

        if(occupied.includes(2)){
            console.log("hello2")
            if(occupied.includes(3)) {
                //check value of 3
                //merge or dont merge
            } else {
                let square2 = document.getElementById(2)
                moveSquare(3, square2)
                fixOccupied(square2)
            }
        }

        if(occupied.includes(1)){
            console.log("hello1")
            if(occupied.includes(2)) {
                //check value of 3
                //merge or dont merge
        } else {
            let square1 = document.getElementById(1)
            moveSquare(2, square1)
            fixOccupied(square1)
            if(occupied.includes(3)) {
                //check value of 3
                //merge or dont merge
            } else {
                moveSquare(3, square1)
                fixOccupied(square1)
            }
        }
        }

        if(occupied.includes(0)){
            console.log("hello0")
            if(occupied.includes(1)) {
                //check value of 3
                //merge or dont merge
        } else {
            let square0 = document.getElementById(0)
            moveSquare(1, square0)
            fixOccupied(square0)
            if(occupied.includes(2)) {
                //check value of 3
                //merge or dont merge
        } else{
            moveSquare(2, square0)
            fixOccupied(square0)
            if(occupied.includes(3)) {
                //check value of 3
                //merge or dont merge
        } else{
            moveSquare(3, square0)
            fixOccupied(square0)
        }           
}}}}
    //Row 2
    if(occupied.includes(7)){
            
        }

        if(occupied.includes(6)){
            if(occupied.includes(7)) {
                //check value of 3
                //merge or dont merge
            } else {
                let square6 = document.getElementById(6)
                moveSquare(7, square6)
                fixOccupied(square6)
            }
        }

        if(occupied.includes(5)){
            if(occupied.includes(6)) {
                //check value of 3
                //merge or dont merge
        } else {
            let square5 = document.getElementById(5)
            moveSquare(6, square5)
            fixOccupied(square5)
            if(occupied.includes(7)) {
                //check value of 3
                //merge or dont merge
            } else {
                moveSquare(7, square5)
                fixOccupied(square5)
            }
        }
        }

        if(occupied.includes(4)){
            if(occupied.includes(5)) {
                //check value of 3
                //merge or dont merge
        } else {
            let square4 = document.getElementById(4)
            moveSquare(5, square4)
            fixOccupied(square4)
            if(occupied.includes(6)) {
                //check value of 3
                //merge or dont merge
        } else{
            moveSquare(6, square4)
            fixOccupied(square4)
            if(occupied.includes(7)) {
                //check value of 3
                //merge or dont merge
        } else{
            moveSquare(7, square4)
            fixOccupied(square4)
        }
               
}}}
    //Row 3
    if(occupied.includes(11)){
            
    }

    if(occupied.includes(10)){
        if(occupied.includes(11)) {
            //check value of 3
            //merge or dont merge
        } else {
            let square10 = document.getElementById(10)
            moveSquare(11, square10)
            fixOccupied(square10)
        }
    }

    if(occupied.includes(9)){
        if(occupied.includes(10)) {
            //check value of 3
            //merge or dont merge
    } else {
        let square9 = document.getElementById(9)
        moveSquare(10, square9)
        fixOccupied(square9)
        if(occupied.includes(11)) {
            //check value of 3
            //merge or dont merge
        } else {
            moveSquare(11, square9)
            fixOccupied(square9)
        }
    }
    }

    if(occupied.includes(8)){
        if(occupied.includes(9)) {
            //check value of 3
            //merge or dont merge
    } else {
        let square8 = document.getElementById(8)
        moveSquare(9, square8)
        fixOccupied(square8)
        if(occupied.includes(10)) {
            //check value of 3
            //merge or dont merge
    } else{
        moveSquare(10, square8)
        fixOccupied(square8)
        if(occupied.includes(11)) {
            //check value of 3
            //merge or dont merge
    } else{
        moveSquare(11, square8)
        fixOccupied(square8)
    }
           
}}}
    //Row 4
    if(occupied.includes(15)){
            
    }

    if(occupied.includes(14)){
        if(occupied.includes(15)) {
            //check value of 3
            //merge or dont merge
        } else {
            let square14 = document.getElementById(14)
            moveSquare(15, square14)
            fixOccupied(square14)
        }
    }

    if(occupied.includes(13)){
        if(occupied.includes(14)) {
            //check value of 3
            //merge or dont merge
    } else {
        let square13 = document.getElementById(13)
        moveSquare(14, square13)
        fixOccupied(square13)
        if(occupied.includes(15)) {
            //check value of 3
            //merge or dont merge
        } else {
            moveSquare(15, square13)
            fixOccupied(square13)
        }
    }
    }

    if(occupied.includes(12)){
        if(occupied.includes(13)) {
            //check value of 3
            //merge or dont merge
    } else {
        let square12 = document.getElementById(12)
        moveSquare(13, square12)
        fixOccupied(square12)
        if(occupied.includes(14)) {
            //check value of 3
            //merge or dont merge
    } else{
        moveSquare(14, square12)
        fixOccupied(square12)
        if(occupied.includes(15)) {
            //check value of 3
            //merge or dont merge
    } else{
        moveSquare(15, square12)
        fixOccupied(square12)
    }
           
}}}
}
button.addEventListener('click', gameMove)


document.addEventListener('keydown', pressedKey)

    // {
    //     square0 = document.getElementById('0')
    //     console.log(square0)
    //     square0.style.gridColumn = 4
    //     square0.style.gridRow = 1
    //     square0.setAttribute('id',`3`)
    // }

    