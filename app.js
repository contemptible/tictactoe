var CURRENT_GAMES = 0;
var MAX_GAMES = 5;
var CURRENT_TURN = 'X';


function initializeBoard() {
  // returns an empty tictactoe array
  var emptyArray = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
  return emptyArray;
}


function displayBoard(square, gameNumber) {
  // returns HTML for the board stored in square
  return '<div class="game' + gameNumber + '"><span class="instructions">Whoever wants to play as X should click their first square now!</span>' + 
         '<div class="square zero">'+ square[0] + '</div><div class="square one">' + square[1] + '</div><div class="square two">' + square[2] + '</div>' + 
         '<div class="square three">' + square[3] + '</div><div class="square four">' + square[4] + '</div><div class="square five">' + square[5] + '</div>' + 
         '<div class="square six">' + square[6] + '</div><div class="square seven">' + square[7] + '</div><div class="square eight">' + square[8] + '</div></div>';
}


function createABoard(square) {
  // listen for clicks and generate a new board until the maximum number of boards is reached
  $('main').on('click', '.newGame', function(event) {
    event.preventDefault;

    square = initializeBoard();
    $('.games').append(displayBoard(square, CURRENT_GAMES));
    CURRENT_GAMES++;

    if (CURRENT_GAMES === MAX_GAMES) {
      $('.newGame').prop('disabled', true);
    }
  });
}

function deleteABoard(square) {
  // this.html = nothing
  // initialize the array associated with this
  // re-enable the add a game button if necessary
}


function XorO(allBoards) {
  var square;

  // listen for clicks on squares and put the current symbol in the slot
  $('main').on('click', '.square', function(event) {
    event.preventDefault;

    if ($(this).html() === '0')
    {
      $(this).html(CURRENT_TURN);

      if $(this).parent().hasClass('game0')
        square = allBoards[0];
      else if $(this).parent().hasClass('game1')
        square = allBoards[1];
      else if $(this).parent().hasClass('game2')
        square = allBoards[2];
      else if $(this).parent().hasClass('game3')
        square = allBoards[3];
      else if $(this).parent().hasClass('game4')
        square = allBoards[4];

      if $(this).hasClass('zero')
        square[0] = CURRENT_TURN;
      else if $(this).hasClass('one')
        square[1] = CURRENT_TURN;
      else if $(this).hasClass('two')
        square[2] = CURRENT_TURN;
      else if $(this).hasClass('three')
        square[3] = CURRENT_TURN;
      else if $(this).hasClass('four')
        square[4] = CURRENT_TURN;
      else if $(this).hasClass('five')
        square[5] = CURRENT_TURN;
      else if $(this).hasClass('six')
        square[6] = CURRENT_TURN;
      else if $(this).hasClass('seven')
        square[7] = CURRENT_TURN;
      else if $(this).hasClass('eight')
        square[8] = CURRENT_TURN;

      if (CURRENT_TURN === 'X') {
        $(this).addClass('x');
        CURRENT_TURN = 'O';
      }
      else {
        $(this).addClass('o');
        CURRENT_TURN = 'X';
      }
    }
  });
}


function winning(square) {
  // returns 0 if the game isn't won; otherwise returns X or O, indicating who won

  var winner = 0;

  if (square[0] === square[1] === square[2])
    winner = square[0];
  else if (square[0] === square[4] === square[8])
    winner = square[0];
  else if (square[0] === square[3] === square[6])
    winner = square[0];
  else if (square[1] === square[4] === square[7])
    winner = square[1];
  else if (square[2] === square[4] === square[6])
    winner = square[2];
  else if (square[2] === square[5] === square[8])
    winner = square[2];
  else if (square[3] === square[4] === square[5])
    winner = square[3];
  else if (square[6] === square[7] === square[8])
    winner = square[6];

  return winner;
}


function startTheGame () {
  var allBoards = [];
  var winners = [false, false, false, false, false];

  for (var i = 0; i < MAX_GAMES; i++) {
    allBoards.push(initializeBoard());
  }

  createABoard();

  XorO();

  

}


$(startTheGame);