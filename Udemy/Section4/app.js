/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, previousRoll, addScore;

init();

document.querySelector('.btn-roll').addEventListener('click', function btn(){
    
    if(gamePlaying) {
    
        //1. Random number.
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        
        //2. Display the result.
        var diceDOM = document.querySelector('.dice');
        var diceDOM2 = document.querySelector('.dice2');
        
        diceDOM.style.display = 'block';
        diceDOM2.style.display = 'block';
        diceDOM.src = ('dice-' + dice + '.png');
        diceDOM2.src = ('dice-' + dice2 + '.png');
       
        previousRoll = (dice + dice2);
         
        
        //3. Update the round score IF the rolled number was NOT 1.
        if (previousRoll == 12) {   
        // 6 in a row  
        document.querySelector('#score-' + activePlayer).textContent = 0;
        document.querySelector('#current-' + activePlayer).textContent = 0;
        nextPlayer();
 
        } 
        
        else if (dice !== 1 && dice2 !== 1) {
        //Add score
        roundScore += (dice + dice2); 
        document.querySelector('#current-' + activePlayer).textContent = roundScore; 
            
        } 
            
        else {
            
        //Next player
        nextPlayer(); 
        
        }
        
        console.log(previousRoll);
          
    }
  
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
    
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    
    
    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    //Check if player won the game
        if (scores[activePlayer] >= addScore) {
//          document.getElementById('#score-').textContent =  alert(document.querySelector('#name-' + activePlayer).textContent + ' has won the Game!')
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        } 
    } 
    
});



function nextPlayer() {
//Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;    
//        Different method
//        if(activePlayer === 0) { 
//            activePlayer = 1;
//        } else {
//            activePlayer = 0;
//        }
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice');//.style.display = 'none';
        document.querySelector('.dice2');//.style.display = 'none';
        
       
}


//Set the winning score
document.querySelector('.btn-add').addEventListener('click', function() {
    
   var x = document.querySelector('.panel').style.display = 'block'; 
   var y = document.querySelector('input').value;
//   var z = document.getElementsByName('input').addEventListener('keypress', function keypress(event) {
//       var keyName = event.which || event.keyCode;
//        if (keyName == 13 || keyName == 32) {
//            return false;
//        } else {
//            return true;
//        }
//       alert('Pressed');
//             
//   });
//    
    if (y == 0 || y == '') {
        document.querySelector('.btn-add').disabled = true;
        document.querySelector('.btn-hold').disabled = true;
        document.querySelector('.btn-roll').disabled = true;
//        console.log('Enter pressed ' + z);
        
        } else if (x == 'block') {
        
        addScore = document.querySelector('input').value;
        document.querySelector('.panel').style.display = 'none';
        document.querySelector('.btn-add').disabled = true;
        document.querySelector('.btn-hold').disabled = false;
        document.querySelector('.btn-roll').disabled = false;
        alert('Winning score was set to '  + addScore);
        console.log('Winning score was set to ' + addScore);
//        console.log('Enter pressed ' + z);   
        } 
    else {
        document.querySelector('.panel').style.display = 'block';
    
        }  

});

document.querySelector('.btn-new').addEventListener('click', init);


function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.panel').style.display = 'block';
    document.querySelector('.btn-add').disabled = false;
    document.querySelector('.btn-hold').disabled = true;
    document.querySelector('.btn-roll').disabled = true;

}



/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/