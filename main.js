$(document).ready(function() {
    let score = 0;
    let timeLeft = 10;
    let gameInterval;
  
    // Function to move the button to a random position
    function moveButton() {
      const container = $('#game-container');
      const button = $('#click-button');
      const containerWidth = container.width();
      const containerHeight = container.height();
      const buttonWidth = button.width();
      const buttonHeight = button.height();
  
      const maxLeft = containerWidth - buttonWidth;
      const maxTop = containerHeight - buttonHeight;
  
      const randomLeft = Math.floor(Math.random() * maxLeft);
      const randomTop = Math.floor(Math.random() * maxTop);
  
      button.css({ left: randomLeft + 'px', top: randomTop + 'px' });
    }
  
    // Function to update the score
    function updateScore() {
      score++;
      $('#score').text(score);
      moveButton();
    }
  
    // Function to start the game timer
    function startGameTimer() {
      gameInterval = setInterval(function() {
        timeLeft--;
        $('#time-left').text(timeLeft);
  
        if (timeLeft <= 0) {
          clearInterval(gameInterval);
          $('#click-button').prop('disabled', true);
          alert('Game Over! Your score is: ' + score);
        }
      }, 1000);
    }
  
    // Initialize the game
    $('#click-button').click(updateScore);
    moveButton();
    startGameTimer();
  });
  