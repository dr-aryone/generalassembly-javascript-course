var prompt = require('prompt');
prompt.start(); // Lets you prompt the user for info

var _total = 0;
var _budget = null;
var _hasBudget = false;

function calculate(){
  console.log('Add amount');
  prompt.get(['amount'], function (err, result) {
    if (err) { // Handle error
      return err;
    }
    var num = Number.parseInt(result.amount, 10);
    var remaining;
    if (!num){
      console.log('Format Error: Please enter an amount in whole pounds');
      return calculate();
    }
    _total += num;
    console.log('Total: '+_total);
    if(_hasBudget) {
      remaining = _budget - _total;
      console.log('Budget: '+_budget);
      console.log('Remaining Budget: ' + remaining);
    }
    return calculate();
  });
}

function getBudget(){
  console.log('Do you have a budget?? (y/n)');
  prompt.get(['budget'], function (err, result) {
    if (err) { // Handle error
      return err;
    }

    if(result.budget === 'y') {
      console.log('What is your budget?');
      prompt.get(['budget'], function (err, result) {
        if (err) { // Handle error
          return err;
        }
        _hasBudget = true;
        _budget = result.budget;
        calculate();
      });
    } else if (result.budget === 'n') {
      calculate();
    } else {
      console.log('Error: Incorrect format: Answer must be \'y\' or \'n\'');
      getBudget();
    }

  });
}

function start(){
  console.log('Welcome to the shopping calculator.')
  console.log('Type an amount into the prompt to see your total.');
  console.log('Type \'exit\' at any time to leave the program');
  getBudget();
}

start();
