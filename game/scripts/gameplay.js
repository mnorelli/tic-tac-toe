window.onload = function() {
  clearBoard();
}; 
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
x_sound = new Audio('sounds/x_sound.mp3');
o_sound = new Audio('sounds/o_sound.mp3');
clap_sound = new Audio('sounds/68698__mikaelfernstrom__handclap.wav');

// shortcut for getting all the game cells
function getAllCells(){   
  var allCells = document.querySelectorAll('.cell');
  return allCells;
}

// shortcut for changing the message at top
function say(status,color){
  var msg = document.querySelector("#message");
  msg.textContent = status;
  msg.style.color = color;
}

// mark the current player value in the specified cell and switches player
function markCell(e) {  
  var cell  = e.target
  var content = cell.textContent;
  if (content === "") {                 // if the cell is empty
    cell.textContent = player;          // display the player ltr in the cell
    cell.style.color = playerColor;
    positions[cell.id] = player;              // update the logic array
    cell.style.pointerEvents = 'none';  // turn off further cell clicks
  }
  if (winner()) {endGame()}
    else if (tie()) {tieGame()}
    else {alternatePlayer()}                 // switch the player
}

// player switching
function alternatePlayer() {
  if (player==='X') {
    player='O';
    playerColor = "orange";
    x_sound.play();
  } else {
    player='X';
    playerColor = "lightgreen";
    o_sound.play();
    }
  say(player+"'s turn...",playerColor); 
}

// sets up the board and empties the cell tracking object
function clearBoard(){
  positions = {a:null,b:null,c:null,
                  d:null,e:null,f:null,
                  g:null,h:null,i:null};
  player = 'X';
  playerColor = "lightgreen";
  var allCells = getAllCells();
  for (i=0;i<allCells.length;i+=1) {
    allCells[i].textContent='';
    allCells[i].removeAttribute("color");
    allCells[i].addEventListener("click",markCell);
    allCells[i].style.pointerEvents = 'all';
  }
  say("Get ready to play...","red");
  setTimeout(function(){say("X goes first!","lightgreen");},1500);
}

var consecutiveWins = {x:null,o:null}
function endGame(){
  say(player+" WINS!!",'red');
  tally(player);
  if (lastPlayerWon == player) {
    consecutiveWins[player] += 1
  } else consecutiveWins = {x:null,o:null}
  if (consecutiveWins[player] % 3 == 0) {
    say("WOW!! "+player+" WON THREE IN A ROW!","yellow")
    consecutiveWins = {x:null,o:null}
  }
  var allCells = getAllCells();
  for (i=0;i<allCells.length;i+=1) {
    allCells[i].style.pointerEvents = 'none';
  }
  clap_sound.play();
  addReset();
}

function tieGame(){
  say("It's a tie...","white");
  addReset();
}

function addReset(){
  var msg = document.querySelector("#message");
  var btnReset = document.createElement("img");
  btnReset.src = 'images/reset-button-th.png';
  btnReset.id = 'reset';
  btnReset.addEventListener("click",clearBoard);
  msg.appendChild(btnReset);
}

function tally(plyr){
  tallies = {1:"images/chalk1.png",2:"images/chalk2.png",3:"images/chalk3.png",4:"images/chalk4.png",5:"images/chalk5.png"}
  var x = document.querySelector("#"+plyr+"_score")
  var last_tally = x.lastElementChild.getAttribute("src")
  if (!last_tally || last_tally == tallies[5]) {
      i = document.createElement("img")
      i.src="images/chalk1.png"
      i.alt = "chalk mark"
      x.appendChild(i)
    } else {
      for (t in tallies) {
        if (last_tally == tallies[t]){
          x.lastChild.setAttribute("src",tallies[parseInt(t)+1])
          return tallies[newT]
        }
      }
    }
}

function erase(plyr) {
  var x = document.querySelector("#"+plyr+"_score")
  return x.lastElementChild.remove(0)
}

//  ********************
//  ***  GAME LOGIC  ***
//  ********************

// return "true" if all the positions are not null, i.e. board is filled
// and there is no winner
function tie() {
    var check = true;
    for (var key in positions) { 
        if (positions[key] === null) check = false;
    }
    return check;
}

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



















