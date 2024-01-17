'use strict';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (guess === 5) {
    document.querySelector('.message').textContent = 'Correct Number';
  } else {
    document.querySelector('.message').textContent = 'Incorrect Number';
  }
});
