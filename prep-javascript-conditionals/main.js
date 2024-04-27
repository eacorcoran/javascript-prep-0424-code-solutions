/* Your JS goes in this file */
function isAdult(age) {
  if (age >= 18) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

const isAdultResult = isAdult(20);
console.log(isAdultResult);

function didStudentPass(score) {
  if (score >= 70) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

const didStudentPassResult = didStudentPass(90);
console.log(didStudentPassResult);

function gradeCalculator(score) {
  if (score < 60) {
    result = 'F';
  } else if (score < 70) {
    result = 'D';
  } else if (score < 80) {
    result = 'C';
  } else if (score < 90) {
    result = 'B';
  } else if (score < 100) {
    result = 'A';
  } else {
    result = 'A++';
  }
  return result;
}

const gradeCalculatorResult = gradeCalculator(105);
console.log(gradeCalculatorResult);

function seasonMessenger(season) {
  if (season === 'summer') {
    result = 'it is hot today';
  } else if (season === 'spring') {
    result = 'the flowers are blooming';
  } else if (season === 'autumn') {
    result = 'the leaves are changing colors';
  } else if (season === 'winter') {
    result = 'it is cold today';
  } else {
    result = 'please enter a valid season';
  }
  return result;
}

const seasonMessengerResult = seasonMessenger('spring');
console.log(seasonMessengerResult);

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    result = 'have a good weekend';
  } else {
    result = 'It is a weekday!';
  }
  return result;
}

const dayDetectorResult = dayDetector('monday');
console.log(dayDetectorResult);
