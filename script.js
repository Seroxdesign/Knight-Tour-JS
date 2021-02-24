let n = 5;
let board = Array.from(Array(n), ()=> new Array(0, 0, 0, 0, 0));
let x_moves = [2, 1, 2, -1, -2, 1, -2, -1]
let y_moves = [1, 2, -1, 2, 1, -2, -1, -2]
let move_count = 0;


//checks if board is complete, returns false if board still has unoccupied cells (working)

const check_if_board_is_complete = () => {
    board.forEach((row) => {
        row.forEach((cell) => {
            if(cell < 0){
                return false 
            }
        })
    })
} 

//Displays board using forEach (working)

const display_board = () => {
    board.forEach((row) => {
        console.log(row)
        console.log("--------------------------------------")
    })
}

//finds warnsdorff value for a single cell(working)

const find_cell_accessibility = (row, col) => {

    let accessible_cells = []

    for(i = 0; i < x_moves.length; i++){
        let new_row = row + x_moves[i]
        let new_col = col + y_moves[i]

        if(in_bounds(new_row, new_col)){
            accessible_cells.push([new_row, new_col])
        }
    }

    board[row][col] = (- (accessible_cells.length))
}

//this function checks if move is legal (working)

const in_bounds = (row, col) => {
    if(row >= 0 && row < n && col >= 0 && col < n && board[row][col] < 1){
        console.log('working')
        return true
    }   
}

//this functions goes on every cell in our board and calculates the it's accessibility range then displays it on the board()

const find_cells_Warnsdorff_values = () => {

    let x = [0, 1, 2, 3, 4]
    let y = [0, 1, 2, 3, 4]

    for(k = 0; k < x.length; k++){
        for(j = 0; j <y.length; j++){
            find_cell_accessibility(x[k], y[j])
        }
    }

}

find_cell_accessibility(0, 0)
find_cells_Warnsdorff_values()
display_board()