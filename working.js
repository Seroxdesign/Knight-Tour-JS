// initializeBoard: (boardSize: integer) -> Array
function initializeBoard(boardSize) {
    return [...Array(boardSize)].map(v => 
                [...Array(boardSize)].map(v => false));
  }
  
  // copyBoard: (board: Array) -> Array
  function copyBoard(board) {
    return board.map(column => column.slice());
  }
  
  // entireBoardVisited: (board: Array) -> boolean
  function entireBoardVisited(board) {
    return board.every(column => column.every(square => square));
  }
  
  // possibleMoves: (x: integer, y: integer, 
  //                 board: Array, size: integer) -> Array
  function possibleMoves(x, y, board, size) {
    const moves = []
    
    const possibilities = [[1, 2], [1, -2], [-1, 2], [-1, -2],
                       [2, 1], [2, -1], [-2, 1], [-2, -1]]
    for (let [offsetX, offsetY] of possibilities) {
      const newX = x + offsetX;
      const newY = y + offsetY;
      if ( newX < size && newX >= 0 
        && newY < size && newY >= 0 
        && !board[newX][newY]) {
          moves.push([newX, newY]);
      }
    }
    return moves;
  }
  
  // visitNextPosition: (x: integer, y: integer, 
  //                     board: Array, boardSize: integer) 
  //                     -> Array|boolean
  function visitNextPosition(x, y, board, boardSize) {
    cellVisits++;
  
    const copiedBoard = copyBoard(board);
    copiedBoard[x][y] = true;
    
    let moves = possibleMoves(x, y, copiedBoard, boardSize);
    if (moves.length === 0 ) {
      if (entireBoardVisited(copiedBoard)) return [[x, y]];
      else return false;
    }
  
    moves = warnsdorff(moves, copiedBoard, boardSize);
    
    for (let [nextX, nextY] of moves) {
      let path = visitNextPosition(nextX, nextY, copiedBoard, boardSize);
      if (!!path) {
        path.push([x, y]);
        return path;
      }
    }
    return false;
  }
  
  // warnsdorff: (moves: Array, board: Array, size: integer) -> Array
  function warnsdorff(moves, board, size) {
    const weightedMoves = [];
    for (const [x, y] of moves) {
      const weight = possibleMoves(x, y, board, size).length;
      weightedMoves.push({move: [x, y], weight});
    }
    return weightedMoves
            .sort((a, b) => a.weight - b.weight)
            .map(weighted => weighted.move);
  }
  
  // knightsTour(x: integer, y: integer, 
  //             boardSize: integer) -> Array|boolean
  function knightsTour(x, y, boardSize) {
    const board = initializeBoard(boardSize);
    
    return visitNextPosition(x, y, board, boardSize).reverse();
  }
  
  let cellVisits = 0;
  var gogoKnight = "gogoKnight " + Date.now();
  const randX = Math.floor(Math.random() * 7);
  const randY = Math.floor(Math.random() * 7);
  
  console.time(gogoKnight);
  console.log(knightsTour(randX, randY, 8));
  console.timeEnd(gogoKnight);
  console.log(cellVisits);