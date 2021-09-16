const data = require('./data.json');

const cards = document.querySelectorAll('.content');
const daily = document.querySelector('#daily');
const weekly = document.querySelector('#weekly');
const monthly = document.querySelector('#monthly');

function populateDaily() {
  let datacounter = 0;
  cards.forEach(card => {
    const workHours = card.querySelector('.stats__hrs--num');
    const prevWeekHrs = card.querySelector('.stats__prev__hrs');
    workHours.textContent = data[datacounter].timeframes.daily.current;
    prevWeekHrs.textContent = data[datacounter].timeframes.daily.previous;
    datacounter++;
  });
}

function populateWeekly() {
  let datacounter = 0;
  cards.forEach(card => {
    const workHours = card.querySelector('.stats__hrs--num');
    const prevWeekHrs = card.querySelector('.stats__prev__hrs');
    workHours.textContent = data[datacounter].timeframes.weekly.current;
    prevWeekHrs.textContent = data[datacounter].timeframes.weekly.previous;
    datacounter++;
  });
}

function populateMonthly() {
  let datacounter = 0;
  cards.forEach(card => {
    const workHours = card.querySelector('.stats__hrs--num');
    const prevWeekHrs = card.querySelector('.stats__prev__hrs');
    workHours.textContent = data[datacounter].timeframes.monthly.current;
    prevWeekHrs.textContent = data[datacounter].timeframes.monthly.previous;
    datacounter++;
  });
}

daily.addEventListener('click', () => {
  weekly.classList.remove('selected');
  monthly.classList.remove('selected');
  daily.classList.add('selected');
  populateDaily();
});

weekly.addEventListener('click', () => {
  daily.classList.remove('selected');
  monthly.classList.remove('selected');
  weekly.classList.add('selected');
  populateWeekly();
});

monthly.addEventListener('click', () => {
  daily.classList.remove('selected');
  monthly.classList.add('selected');
  weekly.classList.remove('selected');
  populateMonthly();
});
