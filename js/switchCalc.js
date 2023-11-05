const metric = document.querySelectorAll('.calc__icon')[0];
const imperial = document.querySelectorAll('.calc__icon')[1];
const calcMetric = document.querySelectorAll('.calc__data-entry')[0];
const calcImperial = document.querySelectorAll('.calc__data-entry')[1];
const hero = document.querySelector('.hero');
const calculator = document.querySelector('.calc');
const introText = document.querySelector('.calc-intro');
const score = document.querySelector('.calc__score');
const scoreText = document.querySelector('.calc__result-text');
let inputs = Array.from(document.querySelectorAll('.calc__data-input'));

export const switchCalc = () => {
  const switcher = (x, y, calc) => {
    Object.keys(inputs).forEach(e => {
      inputs[e].value = '';
    });

    calcMetric.classList[x]('calc__data-entry--hidden');
    calcImperial.classList[y]('calc__data-entry--hidden');
    hero.classList[x]('hero--imperial');
    calculator.classList[x]('calc--imperial');

    introText.classList.remove('hidden');
    introText.classList.add('calc-intro');
    score.classList.add('hidden');
    scoreText.classList.add('hidden');

    if (calc == 'imp') {
      imperial.innerHTML =
        '<use href="./images/icons.svg#icon-elpise-selected" />';
      metric.innerHTML =
        '<use href="./images/icons.svg#icon-elpise-unselected" />';
    } else {
      metric.innerHTML =
        '<use href="./images/icons.svg#icon-elpise-selected" />';
      imperial.innerHTML =
        '<use href="./images/icons.svg#icon-elpise-unselected" />';
    }
  };

  imperial.addEventListener('click', () => {
    switcher('add', 'remove', 'imp');
  });
  metric.addEventListener('click', () => {
    switcher('remove', 'add', 'met');
  });
};
