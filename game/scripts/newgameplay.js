window.onload = function() {

  console.log("Linked!");

  function Game(){
    var playerX = new Player("X","lightgreen");
    var playerO = new Player("O","orange");

  }

  Game.prototype = {
    winner: function(){
      if (won()!==null&&) {
        message(won() + "won!");
        Game.winner = won();
        }
      return player
    },
    update: function(){
      // allow players to play
      // check for winner
      // update game's cell content (player w/ color)
      // update game logic? or replace with 
      // turn off cell

      },
    reset: function(){
      //getAllCells
      //add listeners
      //clear game logic
      //reset content, color?, listeners
      //status message
    },
    say: function(status,color){
      var msg = document.querySelector("#message");
      msg.textContent = status;
      msg.style.color = color;
    }

    // check for win condition
    var won = function() {
      // logivc
      return player;

    }

    this.reset();

    var self = this

    while (self.winner()==false) {
        self.update();
      }

  }

  function Player(letter, color){
    // has a letter, color
    // can play a cellation
    this.letter = letter;
    this.color = color;
  }

  Player.prototype = {
    alternate: function(){
    //if player is x, switch to o, and vice versa
    // switch color
    // send message
    },
    play: function() {
      //add the player's color and letter to the board
      //call the changeBoard function
      //call a check for winner (in parent object?)
      // or, leave winner checking to the game
    }
  }

  function Cell(i) {
    var cell = document.querySelector("#"+i);
  }

  Cell.protoype = {
    set: function(player){
      cell.textContent = player;
      cell.style.color = player.color;
      cell.style.pointerEvents = 'none';
    },
    get: function(){
      return cell.textContent;
    },
    clear: function(){
      cell.textContent='';
      cell.removeAttribute("color");
      cell.style.pointerEvents = 'all';
    },
    listen: function(){
      cell.addEventListener("click",Cell.set(player));
    }
  }


new Game();





















};
// end