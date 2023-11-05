const height = document.querySelectorAll('.calc__data-input')[0];
const weight = document.querySelectorAll('.calc__data-input')[1];
const introText = document.querySelector('.calc-intro');
const score = document.querySelector('.calc__score');
const scoreNr = document.querySelector('.calc__score-nr');
const scoreText = document.querySelector('.calc__result-text');

export const metric = () => {
  const calcMetric = () => {
    const heightValue = parseInt(height.value);
    const weightValue = parseInt(weight.value);

    if (weightValue > 0 && heightValue > 0) {
      const bmi = (weightValue / ((heightValue * heightValue) / 10000)).toFixed(
        1
      );

      introText.classList.add('hidden');
      introText.classList.remove('calc-intro');
      score.classList.remove('hidden');
      scoreText.classList.remove('hidden');
      scoreNr.innerHTML = bmi;

      const bmiText = `<span class="calc__score-in-text">${(
        18.5 *
        ((heightValue * heightValue) / 10000)
      ).toFixed(1)}kgs - ${(
        24.9 *
        ((heightValue * heightValue) / 10000)
      ).toFixed(1)}kgs</span>.`;

      if (bmi < 18.5) {
        scoreText.innerHTML = `Your BMI suggests that you are underweight. 
      Your ideal weight is between ${bmiText}`;
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        scoreText.innerHTML = `Your BMI suggests you're a healthy weight.
       Your ideal weight is between ${bmiText}`;
      } else if (bmi >= 25 && bmi <= 29.9) {
        scoreText.innerHTML = `Your BMI suggests that you are overweight. 
      Your ideal weight is between ${bmiText}`;
      } else {
        scoreText.innerHTML = `Your BMI suggests that you are obese. 
      Your ideal weight is between ${bmiText}`;
      }
    }
  };

  height.addEventListener('change', calcMetric);
  weight.addEventListener('change', calcMetric);
};
