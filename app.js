/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Adding variables here

var activePlayer, score, roundScore;
score = [0, 0];
roundScore = 0;
activePlayer = 0;

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function(){

   diceNum =  Math.floor(Math.random() * 6) + 1;

   var imageDice = document.querySelector('.dice');
   imageDice.src = 'dice-' + diceNum + '.png';
   imageDice.style.display = 'block';

   if(diceNum !== 1)
   {
       roundScore += diceNum;
       document.getElementById('current-' + activePlayer).textContent = roundScore;
   }else{
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.querySelector('.dice').style.display = 'none';
   }

})

document.querySelector('.btn-hold').addEventListener('click', function(){
    score[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = score[activePlayer];

    if(score[activePlayer] > 50)
    {
        document.getElementById('name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.btn-roll').disabled = 'true';
        document.querySelector('.btn-hold').disabled = 'true';
        document.querySelector('.dice').style.display = 'none';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
    }else
    {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
    }
})

document.querySelector('.btn-new').addEventListener('click', function()
{   
    var playerOne = prompt('Enter First Player Name?');
    var playerTwo = prompt('Enter Second player name?');

    

    document.getElementById('name-0').textContent = playerOne;
    document.getElementById('name-1').textContent = playerTwo;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
})
