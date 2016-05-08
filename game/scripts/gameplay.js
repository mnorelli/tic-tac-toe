window.onload = function() {

/*

Pseudo code:

SETUP

  Add background
  Add titles
  Draw grid
  Add event listeners
  Add reset button
  Message: start, X goes first

PLAY
  When grid is clicked:
      add letter
      update game logic array
      toggle X/O
      lock cell
  Look for winnner
  If winner, run winner function

WINNER
  Change Message
  Remove grid lines?
  Flash winning sequence?
  Message: restart

GAME LOGIC
  Create array of locations alongside CSS
  function: test for one letter
    if three-in-row return winner

GRID SETUP

  a | b | c
  -- --- --
  d | e | f
  -- --- --
  g | h | i

*/

console.log("Linked!");

// shortcut for getting all the game cells
function getAllCells(){   
  var allCells = document.querySelectorAll('.cell');
  return allCells;
}

// mark the current player value in the specified cell
function markCell(loc,player) {   
  var cell  = document.querySelector("#"+loc);
  var content = cell.textContent;
  if (content === "") {cell.textContent = player;}
  return content;
}

// clears the board and empties the cell tracking array
function clearBoard(){
  var positions = {a:null,b:null,c:null,
                  d:null,e:null,f:null,
                  g:null,h:null,i:null};
  var allCells = getAllCells();
  for (i=0;i<allCells.length;i+=1) {
    allCells[i].textContent='';
  }
  return positions;
}

// crazy magic needed because you can't set a markCell function 
// on a click handler without it firing immediatey
function makeClickHandler(id) {  
    "use strict";
    return function() {
        markCell(id, player);
    };
}

// set up all the cells with a listener to assign the play to the clicked cell
function addListeners(){
  var allCells = getAllCells();
  for (i=0;i<allCells.length;i+=1) {
    var id = allCells[i].getAttribute('id');
    allCells[i].addEventListener("click",makeClickHandler(id,player));
  }
  return allCells;
}

//  set up the board
var player = 'O';
addListeners();
clearBoard();


};

















