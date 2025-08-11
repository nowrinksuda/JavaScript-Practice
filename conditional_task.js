/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
var Burger = 450;
if (Burger > 500) {
  console.log('free Coke');
} else {
  console.log('Coke : 30tk');
}

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2 
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

// Height in meters, not in inches
var height = 1.55; // 61 inches ~ 1.55 meters
var weight = 65;
var BMI = weight / height ** 2;

if (BMI < 18.5) {
  console.log('You are underweight');
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log('You are normal');
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log('You are overweight');
} else {
  console.log('You are obese');
}
console.log('Your BMI is:', BMI.toFixed(2));

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

var score = 85;

if (score >= 90 && score <= 100) {
  console.log('Grade: A');
} else if (score >= 80 && score <= 89) {
  console.log('Grade: B');
} else if (score >= 70 && score <= 79) {
  console.log('Grade: C');
} else if (score >= 60 && score <= 69) {
  console.log('Grade: D');
} else {
  // No need for condition here; 0-59 are all F
  console.log('Grade: F');
}

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

var myScore = 75;
var myFriendScore = 80;

if (myScore > 80) {
  if (myFriendScore > 80) {
    console.log('Go for a lunch.');
  } else if (myFriendScore < 80 && myFriendScore >= 60) {
    console.log('Good luck next time.');
  } else if (myFriendScore < 60 && myFriendScore >= 40) {
    console.log("Keep your friend's message unseen.");
  } else if (myFriendScore < 40) {
    console.log('Block your friend');
  }
} else {
  console.log('Go to home and sleep and act sad');
}
/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
var num1 = 20;
var num2 = 30;
num1 > num2
  ? console.log((result = num1 * 2))
  : console.log((result = num1 + num2));
/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
var age = 9;
var isStudent = true;
var fare = 800;

if (age < 10) {
  console.log('Children: Free ticket');
} else if (isStudent) {
  //50%discount
  const discount = (fare * 50) / 100;
  const payAmount = fare - discount;
  console.log('Student: 50% discount, fare is', payAmount, 'tk');
} else if (age >= 60) {
  //15%discount
  const discount = (fare * 15) / 100;
  const payAmount = fare - discount;
  console.log('Senior citizen: 15% discount, fare is', payAmount, 'tk');
} else {
  console.log('Regular ticket fare is', fare, 'tk');
}
