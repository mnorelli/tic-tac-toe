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

// mark the current player value in the specified cell and switches player
function markCell(loc,player) {   
  var cell  = document.querySelector("#"+loc);
  var content = cell.textContent;
  if (content === "") {                 // if the cell is empty
    cell.textContent = player;          // display the player ltr in the cell
    cell.style.color = playerColor;
    positions[loc] = player;              // update the logic array
    cell.style.pointerEvents = 'none';  // turn off further cell clicks
  }
  if (winner()) endGame();
  alternatePlayer();                  // switch the player
}

// player switching
function alternatePlayer() {
  if (player==='X') {
    player='O';
    playerColor = "orange";
    } else {
    player='X';
    playerColor = "lightgreen";
    }
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

function endGame(){
  document.querySelector("#message").textContent = player+" WINS!!";
  var allCells = getAllCells();
  for (i=0;i<allCells.length;i+=1) {
    allCells[i].style.pointerEvents = 'none';
  }
}

//  set up the board
var player = 'X';
var playerColor = "lightgreen";
addListeners();
clearBoard();


//  ********************
//  ***  GAME LOGIC  ***
//  ********************

  var positions = {a:null,b:null,c:null,
                  d:null,e:null,f:null,
                  g:null,h:null,i:null};

function winner(){
    if (won('O')) var victor = 'O';
    if (won('X')) var victor = 'X';
    return victor;
}

function won(player){
    return (winRow(player)||winCol(player)||winDiag(player));   
}

function winRow(player) {
    return (three(player,'a','b','c')||
            three(player,'d','e','f')||
            three(player,'g','h','i'));
}

function winCol(player) {
    return (three(player,'a','d','g')||
            three(player,'b','e','h')||
            three(player,'c','f','i'));
}

function winDiag(player) {
    return (three(player,'a','e','i')||
            three(player,'g','e','c'));
}

function three(player,cell1,cell2,cell3){
    return (positions[cell1]==player&&
            positions[cell2]==player&&
            positions[cell3]==player);
}



};   // end of onLoad funtion

















