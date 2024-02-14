'use strict';
let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
let msg=document.querySelector('.message');
let agn= document.querySelector(".again");

const displayMessage=function(message)
{
    msg.textContent=message;
}
document.querySelector('.check').addEventListener('click',function(){
    const guess =Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);

    if(!guess)
    {
        displayMessage("⛔no number");
    }
    else if(guess===secretNumber)
    {
        displayMessage("you won 🏆")
        document.querySelector(".number").textContent=secretNumber;
        document.querySelector('body').style.backgroundColor='#ec4e20'

        if(score>highscore){
            highscore=score;
            document.querySelector(".highscore").textContent=highscore;
        }
    }
    else if (guess !== secretNumber) {
        if (score > 1) {
          // document.querySelector('.message').textContent =
          // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
          displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
          score--;
          document.querySelector('.score').textContent = score;
        } else {
          // document.querySelector('.message').textContent = '💥 You lost the game!';
          displayMessage('💥 You lost the game!');
          document.querySelector('.score').textContent = 0;
        }
      }
})
agn.addEventListener('click', function(){
  score=20;
  secretNumber=Math.trunc(Math.random()*20)+1;
  displayMessage("start guessing");
  document.querySelector("body").style.backgroundColor='#273239'

})
