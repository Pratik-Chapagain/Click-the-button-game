
$(document).ready(function(){
    let score = 0;
    let timeLeft = 10;
    let gameInterval;
// function to move the button to a random position//

function moveButton(){
    const container = $('#game-container');
    const button = $('#click-button');
    const containerwidth = container.width();
    const containerheight = container.height();
    const buttonwidth = button.width();
    const buttonheight = button.height();

    const maxLeftPosition = containerwidth - buttonwidth;
    const maxTop = containerheight - buttonheight;

    const randomLeft = Math.floor(Math.random() * maxLeft);
    const randomTop = Math.floor(Math.random() * maxTop);
    button.css({
        left: randomLeft + 'px',
        top: randomTop + 'px'});
}

//function to update the score function//

    function updateScore(){
        









})