var prompt = require('prompt');
prompt.start(); // Lets you prompt the user for info

var yearRegex = /^\d{4}$/;

var years = [ 'Rat', 'Ox', 'Tiger', 'Cat', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];

var elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];

var cycleStart = 1900;
var yearCycleLength = years.length;
var elementCycleLength = 10;
var elementCycleStepLength = elementCycleLength / elements.length;

var _user = {
  year: null,
  element: null
};

function report(){
  console.log('\n\n********************************');
  console.log('You are a ' + _user.element + ' ' + _user.year);
  console.log('********************************\n\n');
  start();
}

function calculateElement(year) {
  var elementYear = year % elementCycleLength;
  var elementStep = Math.ceil(elementYear / elementCycleStepLength);
  // console.log(year, elementYear, elementStep);
  var element = elements[elementStep];
  _user.element = element;
  report();
}

function calculateYear(){
  // Prompt (which is Async) works like this:
  prompt.get(['year'], function (err, result) {
    if (err) { // Handle error
      return err;
    }

    var yearStr = result.year;
    console.log(yearStr, typeof yearStr);

    if (yearStr.length !== 4) {
      console.log('Incorrect format: Year must be 4 digits long');
      calculateYear();
    }

    if (!yearRegex.test(yearStr)) {
      console.log('Incorrect format: Year must only contain numbers');
      calculateYear()
    }

    var year = Number.parseInt(yearStr, 10);

    var yearNumber = (year-cycleStart) % yearCycleLength;
    var yearSign = years[yearNumber];
    _user.year = yearSign;

    calculateElement(year);
  });
}

function start(){
  console.log('What year were you born? (YYYY)');
  calculateYear();
}

start();
