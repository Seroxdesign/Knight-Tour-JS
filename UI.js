let computer_board = document.getElementsByClassName('AI-board')[0];
let player_board = document.getElementsByClassName('player-board')[0];



const decide_cell_style = (row, board) => {
    
    if(row%2 != 0){
        for(i = 1; i <= 8; i++){
            if(i%2 !=0){
                let cell = document.createElement('div')
                cell.classList.add('white');
                cell.classList.add('cell');
                board.appendChild(cell)
            }
            else{
                let cell = document.createElement('div')
                cell.classList.add('black')
                cell.classList.add('cell');
                board.appendChild(cell)
            }
        }
    }
    else{
        for(i = 1; i <= 8; i++){
            if(i%2 !=0){
                let cell = document.createElement('div')
                cell.classList.add('black');
                cell.classList.add('cell');
                board.appendChild(cell)
            }
            else{
                let cell = document.createElement('div')
                cell.classList.add('white')
                cell.classList.add('cell');
                board.appendChild(cell)
            }
        }
    }
}


const populate_board = (board) => {

    let row = 1;

    for(j = 1; j <= 8; j++){
        decide_cell_style(row, board)
        row++
    }
    
}



populate_board(player_board)
populate_board(computer_board)
