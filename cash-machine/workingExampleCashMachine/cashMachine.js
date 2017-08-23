/* ATM */
var prompt = require('prompt');
prompt.start();

// Dummy Users
var users = [{
    username: 'Fred',
    password: 'hel',
    balance: 200
}, {
    username: 'Jane',
    password: 'low',
    balance: 500
}, {
    username: 'James',
    password: 'orld',
    balance: 110
}];

var count = 0;
//-------------------------------------Start Here (1)-------------------------------------/
/* 1. Have a process where the user enters a username and password */
function startCashMachine() {
    console.log('Welcome to the cash point');
    prompt.get(['username', 'password'], function(err, result) {
        if (err) {
            return err;
        }
// -------------------------------------Step (2a)-----------------------------------------/
        checkUser(result.username, result.password);
    });
}
// -------------------------------------Step (2)-----------------------------------------/
/* 2. The process will then compare against the **collection** of users provided.*/
function checkUser(user, pass) {
    var auth = false;
    var balance = null;

    // Loop through the users
    for (i = 0; i < users.length; i += 1) {
        // Check if entry matches a user
        if (users[i].username === user) {
            // If username exists check to see if the password matches that users password
            if (users[i].password === pass) {
                // set this flag to true if both username and password are true
                auth = true;
                balance = users[i].balance;
            }
        }
    };

    // auth will be true if user credentials is genuine
    if (auth) {
      console.log('Thanks your credentials are correct')
        // -------------------------------------Step (5a)-------------------------------------/
        // Enter user area of cash machine
        enterAccount(balance)
    } else if (count < 2) {
        // -------------------------------------Step (3)-------------------------------------/
        //3. If either the username or password doesn't match then the user should be informed and the process restarted
        // auth will not be set if the password does not match so we will track how many times the user has tried to log
        // on by incrementing the count variable and then start again.
        count++;
        console.log('Incorrect username or password. ' + (3 - count) + 'attempts left.Please try again ');
        startCashMachine();
    } else {
        // -------------------------------------Step (4)-------------------------------------/
        // 4. The user gets 3 attempts before the system withholds the card, prompts the user and exits
        // (going back to the start of the whole process). When the user has trued more than three times
        // we will hit this code where they will be removed from the machine.
        console.log('You have entered the wrong username or password too manytimes.This transaction is being cancelled.');
        // Leave the program
    }
}

function enterAccount(balance) {
    // -------------------------------------Step (5)-------------------------------------/
    /* 5. If the user is successful in authenticating then they go through to a screen that asks them if
    they would like another service (0 = No, 1 = balance, 2 = withdraw). */
    console.log('What would you like to do? - - - - - (1)-Balance, (2)-Withdraw, (0)-Leave');
    promptUserAction(balance)
}

function promptUserAction(balance) {
    prompt.get(['choice'], function(err, result) {
        if (err) {
            return err;
        }
        console.log("This is the result ", result)
        if (result.choice === '1') {
            // -------------------------------------Step (7)-------------------------------------/
            /* 7. 1 will show the user's balance */
            console.log('You chose to get balance');
            console.log('Your Balance is ', balance);
            // -------------------------------------Step (9)-------------------------------------/
            /* 9. The process will repeatedly offer another service until 0 is entered, then the process
            resets to the beginning */
            enterAccount(balance);
        } else if (result.choice === '2') {
            // -------------------------------------Step (8a)-------------------------------------/
            /* 8. 2 will prompt a user for an amount then, if the user has insufficient funds - tell them;
            if the user has sufficient funds then decrement their balance by that amount */
            console.log('How much would you like to take out');
            withdrawMoney(balance);
        } else {
            // -------------------------------------Step (6)-------------------------------------/
            /* 6. 0 will cause an exit */
            console.log('You have selected to leave')
        }

    });
}

// -------------------------------------Step (8)-------------------------------------/
function withdrawMoney(balance){
    var newBalance = null;
    prompt.get(['amount'], function(err, result) {
        if (err) {
            return err;
        }
        if (balance <= result.amount ) {
            console.log('You do not have suffient funds');
            enterAccount(balance);
        } else {
            newBalance = balance - parseInt(result.amount)
            console.log('Your new balance is..', newBalance);
            enterAccount(newBalance);
        }
    });
}

// This starts the cash machine!
startCashMachine();
