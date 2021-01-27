let n = 8;
let board = Array.from(Array(n), ()=> new Array("x", "x", "x", "x", "x", "x", "x", "x"));

function copyBoard(board) {
    return board.map(column => column.slice());
}

let copied = copyBoard(board)

console.log(copied)