const ftHeight = document.querySelectorAll('.calc__data-input')[2];
const inHeight = document.querySelectorAll('.calc__data-input')[3];
const stWeight = document.querySelectorAll('.calc__data-input')[4];
const lbsWeight = document.querySelectorAll('.calc__data-input')[5];
const introText = document.querySelector('.calc-intro');
const score = document.querySelector('.calc__score');
const scoreNr = document.querySelector('.calc__score-nr');
const scoreText = document.querySelector('.calc__result-text');

// 1 ft = 12 in = 30.48 cm
// 1 st = 14 lb = 6.35 kg

export const imperial = () => {
  const calcImperial = () => {
    const inHeightValue = parseInt(inHeight.value) || 0;
    const ftHeightValue = parseInt(ftHeight.value) || 0;
    const stWeightValue = parseInt(stWeight.value) || 0;
    const lbsWeightValue = parseInt(lbsWeight.value) || 0;

    const heightValue = inHeightValue + ftHeightValue * 12;
    const weightValue = lbsWeightValue + stWeightValue * 14;
    if (weightValue > 0 && heightValue > 0) {
      const bmi = ((weightValue * 703) / (heightValue * heightValue)).toFixed(
        1
      );

      introText.classList.add('hidden');
      introText.classList.remove('calc-intro');
      score.classList.remove('hidden');
      scoreText.classList.remove('hidden');
      scoreNr.innerHTML = bmi;

      const getBestWeight = (bmi, unit) => {
        const bestWeight = (
          (bmi * (heightValue * heightValue)) /
          703 /
          14
        ).toFixed(2);
        const bestWeightSplit = bestWeight.split('.');
        let weightArray = new Array();
        weightArray = bestWeightSplit;
        const bestStWeigh = weightArray[0];
        const bestLbsWeight = Math.floor((Number(weightArray[1]) / 100) * 14);
        if (unit === 'st') {
          return bestStWeigh;
        } else if (unit === 'lbs') {
          return bestLbsWeight;
        } else console.error('Error');
      };

      let bmiText = `<span class="calc__score-in-text">
       ${getBestWeight(18.5, 'st')}st ${getBestWeight(18.5, 'lbs')}lbs - 
       ${getBestWeight(24.9, 'st')}st ${getBestWeight(24.9, 'lbs')}lbs 
       </span>.`;

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
    } else {
      introText.classList.remove('hidden');
      introText.classList.add('calc-intro');
      score.classList.add('hidden');
      scoreText.classList.add('hidden');
    }
  };

  inHeight.addEventListener('change', calcImperial);
  ftHeight.addEventListener('change', calcImperial);
  lbsWeight.addEventListener('change', calcImperial);
  stWeight.addEventListener('change', calcImperial);
};
