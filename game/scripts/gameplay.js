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

var cells = ["a","b","c","d","e","f","g","h","i"];

function getAllCells(){
  var allCells = document.querySelectorAll('.cell');
  return allCells;
}

function clearBoard(){
  currentPlayer = "X"
  var positions = {a:null,b:null,c:null,
                  d:null,e:null,f:null,
                  g:null,h:null,i:null};
  var allCells = getAllCells();
  for (i=0;i<allCells.length;i+=1) {
    allCells[i].textContent='';
  }
  return positions;
}

clearBoard();

function addListeners(){
  cells.forEach(function(cell){
    var loc = document.querySelection("#"+cell);
    loc.addEventListener("click",

  })

};

function markCell(loc) {
  var cell  = document.querySelection("#"+loc);
  var content = cell.textContent;
  (content === "") ? content = player


}

