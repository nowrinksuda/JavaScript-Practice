/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

/*programming hero*/
let Num = 1;
while (Num <= 60) {
  console.log(
    'I will invest at least 6 hrs every single day for next 60 days!',
    Num
  );
  Num++;
}
/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

let num = 61;
while (num <= 100) {
  if (num % 2 === 1) {
    console.log('odd number', num);
  }
  num++;
}
/***Subtask-2:

Find all the even numbers from 78 to 98.

 

programming hero*/
let number = 78;
while (number <= 98) {
  if (number % 2 === 0) {
    console.log('even number', number);
  }
  number++;
}
/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
let n = 81;
let sum = 0;

while (n <= 131) {
  sum = sum + n;
  n += 2;
}

console.log('Total sum of odd numbers:', sum);
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/
let a = 206;
let total = 0;

while (a <= 311) {
  total = total + a;
  a += 2;
}

console.log('Total sum of even numbers:', total);
/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */
let m = 1;

while (m <= 10) {
  console.log('5 x', m, '=', 5 * m);
  m++;
}
/***

Implement a countdown timer that counts down from 21 to 15.

 */

let count = 21;
while (count >= 15) {
  console.log('start timing', count);
  count--;
}
