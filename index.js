// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter1 uses function level scope to get the value for the count variable whereas counter2 uses global scope. Counter1 also tiles the value of const counter1 to the function, wheereas counter 2 does not. 
 *
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter1 uses closure by giving the variable counter1 access to the value of the inner function for countermaker() by assigning counter1s value to the function.
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 * 
 * counter1 would be preferable if you need to easily reference that function as a value or use it as a callback to another, whereas 2 would be preferable for quick deployment, low functionality. 
 *
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  let points=Math.floor(Math.random()*2);
  return points;
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore2(callback) {
  let gameFinal={};
  let totalHomeScore=0;
  let totalAwayScore=0;
  for (let i=1; i<10; i++){
  let homeCalc=callback()*i;
  let awayCalc=callback()*i;
  gameFinal["Inning "+i]=`Home: ${totalHomeScore}, Away: ${totalAwayScore}`;
  totalHomeScore+=homeCalc;
  totalAwayScore+=awayCalc;
  }
  return gameFinal;

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

/* For All 9 At A Time */

function finalScore2(callback) {
  let gameFinal={};
  let totalHomeScore=0;
  let totalAwayScore=0;
  for (let i=1; i<10; i++){
  let homeCalc=callback()*i;
  let awayCalc=callback()*i;
  gameFinal["Inning "+i]=`Home: ${totalHomeScore}, Away: ${totalAwayScore}`;
  totalHomeScore+=homeCalc;
  totalAwayScore+=awayCalc;
  }
  return gameFinal;
  
}
function scoreboard2(callback1, callback2) {
  console.log(callback1(callback2));
  }
scoreboard2(finalScore2,inning);