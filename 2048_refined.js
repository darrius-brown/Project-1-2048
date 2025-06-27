

//when moving, the first thing you should do is check squares on that direction
const valueOptionsForRandomValuePlacement = [2, 4]
const getRandomLocationValue = () => {
    return valueOptionsForRandomValuePlacement[Math.floor(Math.random() * 2)]
}

const getRandomValue = () => {
    return Math.floor(Math.random() * 4)
}

const placeRandomSpace = () => {
    let x = getRandomValue()
    let y = getRandomValue()
    board[x][y] = getRandomLocationValue()
}

const moveRight = () => {
    //figure out how many spaces you need to move over
    //let that value be x
    
    for (i = 0; i >= 2; i++) {
        if (board[0][i + 1] > 0) {}
    }
}

let board =
[
[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0]
]
placeRandomSpace()
console.log(board)

