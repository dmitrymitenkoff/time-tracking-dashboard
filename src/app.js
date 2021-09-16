const data = require('./data.json');

const cards = document.querySelectorAll('.content');
const buttons = document.querySelectorAll('button');

function populateStats(period) {
  cards.forEach((card, index) => {
    const currentHrs = card.querySelector('.stats__hrs--num');
    const previousHours = card.querySelector('.stats__prev__hrs');
    currentHrs.textContent = data[index].timeframes[period].current;
    previousHours.textContent = data[index].timeframes[period].previous;
  });
}

buttons.forEach((button, index, btns) => {
  button.addEventListener('click', () => {
    // removes all 'selected' class from all buttons
    btns.forEach(item => item.classList.remove('selected'));
    // add 'selected' class to the active btn
    button.classList.add('selected');

    if (button.id === 'daily') {
      populateStats('daily');
    } else if (button.id == 'weekly') {
      populateStats('weekly');
    } else {
      populateStats('monthly');
    }
  });
});
