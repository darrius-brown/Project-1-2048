
//Spaces should be 0-15
//when moving, the first thing you should do is check squares on that direction
const valueOptionsForRandomValuePlacement = [2, 4]
const getRandomLocationValue = () => {
    return valueOptionsForRandomValuePlacement[Math.floor(Math.random() * 1)]
}

const getRandomValue = () => {
    return Math.floor(Math.random() * 1)
}

const placeRandomSpace = () => {
    let x = getRandomLocationValue()
    let y = getRandomLocationValue()
    board[x][y] = getRandomLocationValue()
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

