const data = require('./data.json');

const cards = document.querySelectorAll('.content');
const daily = document.querySelector('#daily');
const weekly = document.querySelector('#weekly');
const monthly = document.querySelector('#monthly');

function populateStats(period) {
  cards.forEach((card, index) => {
    const currentHrs = card.querySelector('.stats__hrs--num');
    const previousHours = card.querySelector('.stats__prev__hrs');
    currentHrs.textContent = data[index].timeframes[period].current;
    previousHours.textContent = data[index].timeframes[period].previous;
  });
}

daily.addEventListener('click', () => {
  weekly.classList.remove('selected');
  monthly.classList.remove('selected');
  daily.classList.add('selected');
  populateStats('daily');
});

weekly.addEventListener('click', () => {
  daily.classList.remove('selected');
  monthly.classList.remove('selected');
  weekly.classList.add('selected');
  populateStats('weekly');
});

monthly.addEventListener('click', () => {
  daily.classList.remove('selected');
  monthly.classList.add('selected');
  weekly.classList.remove('selected');
  populateStats('monthly');
});
