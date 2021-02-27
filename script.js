let n = 8;
let board = Array.from(Array(n), ()=> new Array(0, 0, 0, 0, 0, 0, 0, 0));
let x_moves = [2, 1, 2, -1, -2, 1, -2, -1]
let y_moves = [1, 2, -1, 2, 1, -2, -1, -2]
let move_count = 0;
let board_solved = false
let attempt_number = 0;
let solved_board = [];
let find_tour_btn = document.getElementById('find-tour');
let row_picker = document.getElementsByClassName('row')[0];
let col_picker = document.getElementsByClassName('col')[0];
let row = 0;
let col = 0;


//checks if board is complete, returns false if board still has unoccupied cells (working)

const board_is_complete = () => {
    let available_cells = []

    board.forEach((row) => {
        row.forEach((cell) => {
            if(cell <= 0){
                 available_cells.push(cell)
            }
        })
    })

    if(available_cells.length == 0){
        return true
    }
    else{
        return false
    }

} 

//Displays board using forEach (working)

const display_board = () => {
    board.forEach((row) => {
        console.log(row)
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
        return true
    }   
}

//this functions goes on every cell in our board and calculates the it's accessibility range then displays it on the board(working)

const find_cells_Warnsdorff_values = () => {

    let x = [0, 1, 2, 3, 4, 5, 6, 7]
    let y = [0, 1, 2, 3, 4, 5, 6, 7]

    for(k = 0; k < x.length; k++){
        for(j = 0; j <y.length; j++){
            find_cell_accessibility(x[k], y[j])
        }
    }

}

//places knight and marks with move count at given row and col(working)

const place_knight = (row, col) => {
    move_count += 1;
    board[row][col] = move_count;
}

//finds the next available cells, compares between them and chooses the one with the biggest likelyhood of success of solving the board(working)

const find_next_cell = (row, col) => {
    let accessible_cells = []

    for(i = 0; i < x_moves.length; i++){
        let new_row = row + x_moves[i]
        let new_col = col + y_moves[i]

        if(in_bounds(new_row, new_col)){
            if(accessible_cells.length == 0){
                accessible_cells.push([new_row, new_col])
            }
            else if((board[accessible_cells[0][0]][accessible_cells[0][1]]) < board[new_row][new_col]){
                accessible_cells[0] = [new_row, new_col]
            }
            else if((board[accessible_cells[0][0]][accessible_cells[0][1]]) == (board[new_row][new_col])){
                accessible_cells.push([new_row, new_col])    
            }
        }
    }

    return accessible_cells
}


//attempts to solve knight tour( Logic is functional )

const solve_tour = (row, col) => {

    place_knight(row, col)
    let next_cell = find_next_cell(row, col)
    let random  = Math.floor(Math.random() * next_cell.length)
    if(next_cell.length > 0){
        solve_tour(next_cell[random][0], next_cell[random][1])
    }
    else if(next_cell.length == 0 && board_is_complete() == false){
        reset_board()
        attempt_number += 1;
    }
    else{
        display_board()
        console.log('solution found after ' + attempt_number + ' attempts')
        board_solved = true
        solved_board = board;
        console.log('this is the solved board: ', solved_board)
        reset_board()
        return
    }
    
}

//resets board if knight tour fails(working)

const reset_board = () => {
    board = Array.from(Array(n), ()=> new Array(0, 0, 0, 0, 0, 0, 0, 0));
    move_count = 0;
}

//Solves tour(working) FINALLY!!!!!

const knight_tour = () => {
    
    find_cells_Warnsdorff_values()
    while(board_solved == false){
        solve_tour(row, col)
    }
}



row_picker.addEventListener('input', (e) => {
    row = e.target.value;
    console.log(row)
})

col_picker.addEventListener('input', (e) => {
    col = e.target.value;
    console.log(col)
})

find_tour_btn.addEventListener('click', knight_tour)
