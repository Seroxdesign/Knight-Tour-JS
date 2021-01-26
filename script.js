let n = 8;
let board = Array.from(Array(n), ()=> new Array("x", "x", "x", "x", "x", "x", "x", "x"));
let counter = 1;
let knight_moves = [[1, 2], [2, 1], [-1, 2], [2, -1], [-2, 1], [1, -2], [-2, -1], [-1, -2]]
let row = 0;
let col = 0;
let xrow = "";
let xcol = "";

function display(){
    board.forEach((row) => {
        console.log(row)
        console.log("--------------------------------")
    })
}


display()



function place_knight(row, col){
    board[row][col] = counter;
    counter++;
}



function find_availability(row, col){
    if(board[row][col] == "x"){
        return true
    } else if(board[row][col] != "x"){
        return false
    }
}




function find_target_cells(row, col){

    legal_moves = []
    knight_moves.forEach((move) =>{
       if((row + move[0]) >= 0 && (row + move[0]) < n && (col + move[1]) >= 0 && (col + move[1]) < n && find_availability((row + move[0]), (col, move[1])) == true){
           legal_moves.push([(row + move[0]), (col + move[1])])
       }
    })
    console.log(`your legal moves are ${legal_moves}`)
    return legal_moves
}




function determine_ideal_cell(array){
    let accessibility = []
    let ideal = [];

    array.forEach((arr) =>{
       let num = (find_target_cells(arr[0], arr[1])).length 
       if (num < accessibility[0] || accessibility[0] == undefined){
           accessibility[0] = num
           ideal = [arr[0], arr[1]]
           console.log(`The accessibility number is ${accessibility} for the cell, ${ideal}`)
       } else {
           console.log('skipping')
       }
    })

    console.log(ideal)
    row = ideal[0];
    col = ideal[1];
    console.log(row, col)

    if(find_availability(row, col) == true ){
        board[row][col] = counter;
        counter++;
    }

    
}

function check_board(){
    empty_cells = []
    board.forEach((row) => {
        row.forEach((cell) =>{
            if(cell == undefined){
                empty_cells.push(cell)
            } else {
                console.log("")
            }
        })
    })

    if(empty_cells.length > 0){
        return false
    } else {
        return false
    }
}




function solve_board(row, col){
    for(i = counter; i < 64; i++){
    place_knight(row, col)
    determine_ideal_cell(find_target_cells(row, col))
    display()
    }
}

solve_board(row, col)