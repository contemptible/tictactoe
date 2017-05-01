var CURRENT_GAMES = 0;
var MAX_GAMES = 5;
var CURRENT_TURN = 'X';


function initializeBoard() {
  // returns an empty tictactoe array
  var emptyArray = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
  return emptyArray;
}


function displayBoard(square) {
  // returns HTML for the board stored in square
  return '<div class="game"><span class="instructions">Whoever wants to play as X should click a square now to go first!</span>' + 
         '<div class="square zero">'+ square[0] + '</div><div class="square one">' + square[1] + '</div><div class="square two">' + square[2] + '</div>' + 
         '<div class="square three">' + square[3] + '</div><div class="square four">' + square[4] + '</div><div class="square five">' + square[5] + '</div>' + 
         '<div class="square six">' + square[6] + '</div><div class="square seven">' + square[7] + '</div><div class="square eight">' + square[8] + '</div></div>';
}


function startTheGame () {
  var allBoards = [];
  var winners = [false, false, false, false, false];

  for (var i = 0; i < MAX_GAMES; i++) {
    allBoards.push(initializeBoard());
  }

  // listen for clicks and generate a new board until the maximun number of allowed boards is reached
  $('main').on('click', '.newGame', function(event) {
    event.preventDefault;

    if (CURRENT_GAMES < MAX_GAMES) {
      allBoards[CURRENT_GAMES] = initializeBoard();
      $('.games').append(displayBoard(allBoards[CURRENT_GAMES]));
      CURRENT_GAMES++;

      if (CURRENT_GAMES === MAX_GAMES) {
        $('.newGame').prop('disabled', true);
      }
    }
  });

  // listen for clicks on squares and put the current symbol in the slot
  $('main').on('click', '.square', function(event) {
    event.preventDefault;

    if ($(this).html() === '0')
    {
      $(this).html(CURRENT_TURN);

      if (CURRENT_TURN === 'X') {
        $(this).addClass('x');
        CURRENT_TURN = 'O';
      }
      else {
        $(this).addClass('o');
        CURRENT_TURN = 'X';
      }
    }
    // check for winning condition and display winner stuff in the appropriate "game"
    // ask if player wants to close window at that point but not before
  })
}


$(startTheGame);