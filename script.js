'use strict';

let highScore = 0;
let score = 100;

const Secretnumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = Secretnumber;

const changeScore = Number(document.querySelector('.score').textContent);

console.log(changeScore);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  ('use strict');

  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  let score = 20;
  let highscore = 0;

  const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

  document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
      displayMessage('⛔️ No number!');
    } else if (guess === secretNumber) {
      displayMessage('🎉 Correct Number!');
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }
  });

  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });

  console.log(guess);
  if (guess === Secretnumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (!guess) {
    document.querySelector('.message').textContent = 'Enter a valid Number';
  } else if (guess > Secretnumber) {
    document.querySelector('.message').textContent = 'Too High';
    document.querySelector('.score').textContent = changeScore - 10;
  } else if (guess < Secretnumber) {
    document.querySelector('.message').textContent = 'Too low';
    document.querySelector('.score').textContent = changeScore - 10;
  }

  if (changeScore < 20) {
    document.querySelector('.guess').textContent = 'You lost the game';
    document.querySelector('.guess').disabled = true;
  }
});
