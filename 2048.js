const button = document.querySelector('.button')
const grid = document.querySelector('.grid')
const reloadButton = document.querySelector("button")
let score = 0
let occupied = []
let winner = false
winScore = 2048

startingSquare()
placeSquare(event)
winCheckAndColorSet()

const openModalLose = () => {
    const modal = document.getElementById('modal-lose')
    modal.style.display = 'block';
}
const openModalWin = () => {
    const winModal = document.getElementById('modal-win')
    winModal.style.display = 'block';
    winner = true
}
const closeModal = () => {
  const modal = document.getElementById('modal-lose')
  modal.style.display = 'none'
  const winModal = document.getElementById('modal-win')
  winModal.style.display = 'none'
}
function fixOccupied(chooseSquare) {
    if(occupied.includes((parseInt(chooseSquare.id))) === false)
    occupied.push(parseInt(chooseSquare.id))
}  
function moveSquare(position, chooseSquare) {
    occupied = occupied.filter(index => index !== parseInt(chooseSquare.id))
    row = Math.floor((position / 4) + 1)
    column = Math.floor((position % 4) + 1)
    chooseSquare.style.gridColumn = `${column}`
    chooseSquare.style.gridRow = `${row}`
    chooseSquare.setAttribute('id',`${position}`)
}
function placeSquare(event) {
    //Get random creates column, row, and value for a square
    getRandom()
    const square = document.createElement('div')
    moveSquare(randomPlacement, square)
    square.className = ('game-square')
    square.innerHTML = `${randomValue[value]}`
    if(occupied.includes(randomPlacement) === false) {
        grid.appendChild(square)
        occupied.push(randomPlacement)
    } else if(occupied.includes(randomPlacement)){
        placeSquare(event)
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
    square.innerHTML = `${randomValue[value]}`
    grid.appendChild(square)
    occupied.push(randomPlacement) 
}
function pressedKey(event) {
startocc = occupied
merged = []
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
    endocc = occupied
    if(startocc !== endocc){
        placeSquare(event)
    }
    scoreBoard = document.querySelector('#score')
    scoreBoard.innerHTML = `Score:${score}`
    closeModal()
    winCheckAndColorSet()
    endCheck()
    
    
}
function rightMove(lastColumn) {
    let right2 = document.getElementById(lastColumn - 2)
    let right1 = document.getElementById(lastColumn - 3)
    let right0 = document.getElementById(lastColumn - 4)

        if(occupied.includes(lastColumn - 2)){ 
            if(occupied.includes(lastColumn - 1)) {
                let mergeRight1 = document.getElementById(lastColumn - 1)
                if(right2.innerHTML === mergeRight1.innerHTML && merged.includes(mergeRight1.id) === false)
                    merge(right2, mergeRight1) 
                    fixOccupied(right2)
                } else {
                    moveSquare(lastColumn - 1, right2)
                    fixOccupied(right2)
                }
        }
        if(occupied.includes(lastColumn - 3)){
            if(occupied.includes(lastColumn - 2)) {
                let mergeRight2 = document.getElementById(lastColumn - 2)
                if(right1.innerHTML === mergeRight2.innerHTML && merged.includes(mergeRight2.id) === false)
                merge(right1, mergeRight2)
                fixOccupied(right1)
        } else {
            moveSquare(lastColumn - 2, right1)
            fixOccupied(right1)
            if(occupied.includes(lastColumn - 1)) {
                let mergeRight3 = document.getElementById(lastColumn - 1)
                if(right1.innerHTML === mergeRight3.innerHTML && merged.includes(mergeRight3.id) === false)
                merge(right1, mergeRight3)
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
                if(right0.innerHTML === mergeRight4.innerHTML && merged.includes(mergeRight4.id) === false)
                merge(right0, mergeRight4)
                fixOccupied(right0)
        } else {
            moveSquare(lastColumn - 3, right0)
            fixOccupied(right0)
            if(occupied.includes(lastColumn - 2)) {
                let mergeRight5 = document.getElementById(lastColumn - 2)
                if(right0.innerHTML === mergeRight5.innerHTML && merged.includes(mergeRight5.id) === false)
                merge(right0, mergeRight5)
                fixOccupied(right0)
        } else{
            moveSquare(lastColumn - 2, right0)
            fixOccupied(right0)
            if(occupied.includes(lastColumn - 1)) {
                let mergeRight6 = document.getElementById(lastColumn - 1)
                if(right0.innerHTML === mergeRight6.innerHTML && merged.includes(mergeRight6.id) === false)
                merge(right0, mergeRight6)
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
            if(left2.innerHTML === mergeLeft1.innerHTML && merged.includes(mergeLeft1.id) === false)
                merge(left2, mergeLeft1) 
                fixOccupied(left2)
        } else {
            moveSquare(lastColumn + 1, left2)
            fixOccupied(left2)
        }
    }

    if(occupied.includes(lastColumn + 3)){
        if(occupied.includes(lastColumn + 2)) {
            let mergeLeft2 = document.getElementById(lastColumn + 2)
            if(left1.innerHTML === mergeLeft2.innerHTML && merged.includes(mergeLeft2.id) === false)
                merge(left1, mergeLeft2) 
                fixOccupied(left1)
    } else {
        moveSquare(lastColumn + 2, left1)
        fixOccupied(left1)
        if(occupied.includes(lastColumn + 1)) {
            let mergeLeft3 = document.getElementById(lastColumn + 1)
            if(left1.innerHTML === mergeLeft3.innerHTML && merged.includes(mergeLeft3.id) === false)
                merge(left1, mergeLeft3) 
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
            if(left0.innerHTML === mergeLeft4.innerHTML && merged.includes(mergeLeft4.id) === false)
                merge(left0, mergeLeft4) 
                fixOccupied(left0)
    } else {
        moveSquare(lastColumn + 3, left0)
        fixOccupied(left0)
        if(occupied.includes(lastColumn + 2)) {
            let mergeLeft5 = document.getElementById(lastColumn + 2)
            if(left0.innerHTML === mergeLeft5.innerHTML && merged.includes(mergeLeft5.id) === false)
                merge(left0, mergeLeft5) 
                fixOccupied(left0)
    } else{
        moveSquare(lastColumn + 2, left0)
        fixOccupied(left0)
        if(occupied.includes(lastColumn + 1)) {
            let mergeLeft6 = document.getElementById(lastColumn + 1)
            if(left0.innerHTML === mergeLeft6.innerHTML && merged.includes(mergeLeft6.id) === false)
                merge(left0, mergeLeft6) 
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
            if(up2.innerHTML === mergeUp1.innerHTML && merged.includes(mergeUp1.id) === false)
                merge(up2, mergeUp1) 
                fixOccupied(up2)
            } else {
                moveSquare(lastColumn + 1, up2)
                fixOccupied(up2)
            }
    }

    if(occupied.includes(lastColumn + 9)){
        if(occupied.includes(lastColumn + 5)) {
            let mergeUp2 = document.getElementById(lastColumn + 5)
            if(up1.innerHTML === mergeUp2.innerHTML && merged.includes(mergeUp2.id) === false)
                merge(up1, mergeUp2) 
                fixOccupied(up1)
    } else {
        moveSquare(lastColumn + 5, up1)
        fixOccupied(up1)
        if(occupied.includes(lastColumn + 1)) {
            let mergeUp3 = document.getElementById(lastColumn + 1)
            if(up1.innerHTML === mergeUp3.innerHTML && merged.includes(mergeUp3.id) === false)
                merge(up1, mergeUp3) 
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
            if(up0.innerHTML === mergeUp4.innerHTML && merged.includes(mergeUp4.id) === false)
                merge(up0, mergeUp4) 
                fixOccupied(up0)
    } else {
        moveSquare(lastColumn + 9, up0)
        fixOccupied(up0)
        if(occupied.includes(lastColumn + 5)) {
            let mergeUp5 = document.getElementById(lastColumn + 5)
            if(up0.innerHTML === mergeUp5.innerHTML && merged.includes(mergeUp5.id) === false)
                merge(up0, mergeUp5) 
                fixOccupied(up0)
    } else{
        moveSquare(lastColumn + 5, up0)
        fixOccupied(up0)
        if(occupied.includes(lastColumn + 1)) {
            let mergeUp6 = document.getElementById(lastColumn + 1)
            if(up0.innerHTML === mergeUp6.innerHTML && merged.includes(mergeUp6.id) === false)
                merge(up0, mergeUp6) 
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
            if(down2.innerHTML === mergeDown1.innerHTML && merged.includes(mergeDown1.id) === false)
                merge(down2, mergeDown1) 
                fixOccupied(down2)
        } else {
            moveSquare(lastColumn - 1, down2)
            fixOccupied(down2)
        }
    }

    if(occupied.includes(lastColumn - 9)){
        if(occupied.includes(lastColumn - 5)) {
            let mergeDown2 = document.getElementById(lastColumn - 5)
            if(down1.innerHTML === mergeDown2.innerHTML && merged.includes(mergeDown2.id) === false)
                merge(down1, mergeDown2) 
                fixOccupied(down1)
    } else {
        moveSquare(lastColumn - 5, down1)
        fixOccupied(down1)
        if(occupied.includes(lastColumn - 1)) {
            let mergeDown3 = document.getElementById(lastColumn - 1)
            if(down1.innerHTML === mergeDown3.innerHTML && merged.includes(mergeDown3.id) === false)
                merge(down1, mergeDown3) 
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
            if(down0.innerHTML === mergeDown4.innerHTML && merged.includes(mergeDown4.id) === false)
                merge(down0, mergeDown4) 
                fixOccupied(down0)
    } else {
        moveSquare(lastColumn - 9, down0)
        fixOccupied(down0)
        if(occupied.includes(lastColumn - 5)) {
            let mergeDown5 = document.getElementById(lastColumn - 5)
            if(down0.innerHTML === mergeDown5.innerHTML && merged.includes(mergeDown5.id) === false)
                merge(down0, mergeDown5) 
                fixOccupied(down0)
    } else{
        moveSquare(lastColumn - 5, down0)
        fixOccupied(down0)
        if(occupied.includes(lastColumn - 1)) {
            let mergeDown6 = document.getElementById(lastColumn - 1)
            if(down0.innerHTML === mergeDown6.innerHTML && merged.includes(mergeDown6.id) === false)
                merge(down0, mergeDown6) 
                fixOccupied(down0)
    } else{
        moveSquare(lastColumn - 1, down0)
        fixOccupied(down0)
    }           
}}}}
function merge(checkSquare, deletedSquare){
    value = parseInt(checkSquare.innerHTML)
    value += value
    score += value
    checkSquare.innerHTML = `${value}`
    moveSquare(parseInt(deletedSquare.id), checkSquare)
    merged.push(deletedSquare.id)
    deletedSquare.remove()
    
}
function reload() {
    reload = location.reload();
    closeModal()
}
function endRowCheck() {
    for(i = 4; i < 17; i += 4){
    let checkRow3 = document.getElementById(i - 1)
    let checkRow2 = document.getElementById(i - 2)
    let checkRow1 = document.getElementById(i - 3)
    let checkRow0 = document.getElementById(i - 4)
    if(checkRow0.innerHTML !== checkRow1.innerHTML){
        if(checkRow1.innerHTML !== checkRow2.innerHTML){
            if(checkRow2.innerHTML !== checkRow3.innerHTML){
                endArray.push(true)
            }
        }
    }         
}
}
function endColumnCheck() {
    for(i = 13; i < 17; i ++){
    let checkColumn3 = document.getElementById(i - 1)
    let checkColumn2 = document.getElementById(i - 5)
    let checkColumn1 = document.getElementById(i - 9)
    let checkColumn0 = document.getElementById(i - 13)
    if(checkColumn0.innerHTML !== checkColumn1.innerHTML){
        if(checkColumn1.innerHTML !== checkColumn2.innerHTML){
            if(checkColumn2.innerHTML !== checkColumn3.innerHTML){
                endArray.push(true)
            }
        }
    }         
}
}
function endCheck(){
    endArray = []
    if(occupied.length === 16){
        endRowCheck()
        endColumnCheck()
        if(endArray.length === 8){
            openModalLose()
    }
}
}
function winCheckAndColorSet(){
    for(i = 0; i < occupied.length; i++) {
        winSquare = document.getElementById(occupied[i])
        if(winSquare.innerHTML == 2){
            winSquare.style.backgroundColor = 'white'
            winSquare.style.color = 'black'
            winSquare.style.paddingTop = '15px'
            winSquare.style.fontSize = '60px'
        }
        if(winSquare.innerHTML == 4){
            winSquare.style.backgroundColor = 'tan'
            winSquare.style.color = 'black'
            winSquare.style.paddingTop = '15px'
            winSquare.style.fontSize = '60px'
        }
        if(winSquare.innerHTML == 8){
            winSquare.style.backgroundColor = 'lightsalmon  '
            winSquare.style.color = 'white'
            winSquare.style.paddingTop = '15px'
            winSquare.style.fontSize = '60px'
        }
        if(winSquare.innerHTML == 16){
            winSquare.style.backgroundColor = 'orange'
            winSquare.style.color = 'white'
            winSquare.style.paddingTop = '15px'
            winSquare.style.fontSize = '60px'
        }
        if(winSquare.innerHTML == 32){
            winSquare.style.backgroundColor = 'red'
            winSquare.style.color = 'white'
            winSquare.style.paddingTop = '15px'
            winSquare.style.fontSize = '60px'
        }
        if(winSquare.innerHTML == 64){
            winSquare.style.backgroundColor = 'firebrick'
            winSquare.style.color = 'white'
            winSquare.style.paddingTop = '15px'
            winSquare.style.fontSize = '60px'
        }
        if(winSquare.innerHTML == 128){
            winSquare.style.backgroundColor = 'khaki '
            winSquare.style.color = 'black'
            winSquare.style.paddingTop = '15px'
            winSquare.style.fontSize = '55px'
        }
        if(winSquare.innerHTML == 256){
            winSquare.style.backgroundColor = 'wheat'
            winSquare.style.color = 'white'
            winSquare.style.paddingTop = '15px'
            winSquare.style.fontSize = '55px'
        }
        if(winSquare.innerHTML == 512){
            winSquare.style.backgroundColor = 'gold'
            winSquare.style.color = 'white'
            winSquare.style.paddingTop = '15px'
            winSquare.style.fontSize = '55px'
        }
        if(winSquare.innerHTML == 1024){
            winSquare.style.backgroundColor = 'purple'
            winSquare.style.color = 'white'
            winSquare.style.paddingTop = '25px'
            winSquare.style.fontSize = '40px'
        }
        if(winSquare.innerHTML == 2048){
            winSquare.style.backgroundColor = 'hotpink'
            winSquare.style.color = 'white'
            winSquare.style.paddingTop = '25px'
            winSquare.style.fontSize = '40px'
        }
        if(winSquare.innerHTML == 4096){
            winSquare.style.backgroundColor = 'deepskyblue'
            winSquare.style.color = 'white'
            winSquare.style.paddingTop = '25px'
            winSquare.style.fontSize = '40px'
        }
        if(winSquare.innerHTML == 8192){
            winSquare.style.backgroundColor = 'springgreen'
            winSquare.style.color = 'white'
            winSquare.style.paddingTop = '25px'
            winSquare.style.fontSize = '40px'
        }
        if(winSquare.innerHTML == 16384){
            winSquare.style.backgroundColor = 'saddlebrown '
            winSquare.style.color = 'white'
            winSquare.style.paddingTop = '30px'
            winSquare.style.fontSize = '30px'
        }
        if(winSquare.innerHTML == 32768){
            winSquare.style.backgroundColor = 'black'
            winSquare.style.color = 'white'
            winSquare.style.paddingTop = '30px'
            winSquare.style.fontSize = '30px'
        }
        if(winSquare.innerHTML == winScore && winner === false) {
            openModalWin()
        }
    }
}
document.addEventListener('keydown', pressedKey)
reloadButton.addEventListener('click', reload, false)

//testing git add



    