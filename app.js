// game state global
var CURRENT_TURN = 'X';


function initializeBoard() {
  // returns a tictactoe array full of 0s
  var emptyArray = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
  return emptyArray;
}


function displayBoard(square) {
  // returns HTML for the board stored in square
  return '<div class="game"><span class="instructions">Whoever wants to play as X should click their first square now!</span>' + 
         '<div class="square zero">'+ square[0] + '</div><div class="square one">' + square[1] + '</div><div class="square two">' + square[2] + '</div>' + 
         '<div class="square three">' + square[3] + '</div><div class="square four">' + square[4] + '</div><div class="square five">' + square[5] + '</div>' + 
         '<div class="square six">' + square[6] + '</div><div class="square seven">' + square[7] + '</div><div class="square eight">' + square[8] + '</div><div class="the-winner"></div></div>';
}


function winning(square) {
  // returns 0 if the game isn't won; otherwise returns X or O, indicating who won

  var winner = 0;

  if ((square[0] === square[1]) && (square[1] === square[2]))
    winner = square[0];
  else if ((square[0] === square[4]) && (square[4] === square[8]))
    winner = square[0];
  else if ((square[0] === square[3]) && (square[3] === square[6]))
    winner = square[0];
  else if ((square[1] === square[4]) && (square[4] === square[7]))
    winner = square[1];
  else if ((square[2] === square[4]) && (square[4] === square[6]))
    winner = square[2];
  else if ((square[2] === square[5]) && (square[5] === square[8]))
    winner = square[2];
  else if ((square[3] === square[4]) && (square[4] === square[5]))
    winner = square[3];
  else if ((square[6] === square[7]) && (square[7] === square[8]))
    winner = square[6];

  return winner;
}


function startTheGame () {
  var square = initializeBoard();
  var winner;

  $('main').on('click', '.newGame', function(event) {
    event.preventDefault;

    $('.games').html(displayBoard(square));
    $('h2').addClass('invisible');
    $('.newGame').addClass('invisible');

  });

  // listen for clicks on squares and put the current symbol in the square
  $('main').on('click', '.square', function(event) {
    event.preventDefault;

    $('.instructions').addClass('invisible');

    if ($(this).html() === '0')
    {
      $(this).html(CURRENT_TURN);

      if ($(this).hasClass('zero'))
        square[0] = CURRENT_TURN;
      else if ($(this).hasClass('one'))
        square[1] = CURRENT_TURN;
      else if ($(this).hasClass('two'))
        square[2] = CURRENT_TURN;
      else if ($(this).hasClass('three'))
        square[3] = CURRENT_TURN;
      else if ($(this).hasClass('four'))
        square[4] = CURRENT_TURN;
      else if ($(this).hasClass('five'))
        square[5] = CURRENT_TURN;
      else if ($(this).hasClass('six'))
        square[6] = CURRENT_TURN;
      else if ($(this).hasClass('seven'))
        square[7] = CURRENT_TURN;
      else if ($(this).hasClass('eight'))
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

    winner = winning(square);

    if ((winner === 'X') || (winner === 'O')) {
      $('footer').html('<p>' + winning(square) + ' is the winner!<br />Would you like to play again?</p><p><button type="submit" name="resetGame" class="resetGame">Play Again!</button></p>');
    }

    if (winner === 'X')
      $('footer').addClass('x');
    else if (winner === 'O')
      $('footer').addClass('o');

  });

  // listen for clicks on resetGame and reset the game
  $('footer').on('click', '.resetGame', function(event) {
    event.preventDefault;

    CURRENT_TURN = 'X';
    square = initializeBoard();
    $('.instructions').removeClass('invisible');
    $('.games').html(displayBoard(square));
    $('footer').html('');

  });
}


$(startTheGame);