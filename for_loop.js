/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

/*programming hero*/
for (let num = 1; num <= 60; num++) {
  console.log(
    'I will invest at least 6 hrs every single day for next 60 days!',
    num
  );
}
/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */
for (let i = 61; i <= 100; i += 2) {
  console.log('odd number:', i);
}

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

for (let j = 78; j <= 98; j += 2) {
  console.log('even number:', j);
}
/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
let sum = 0;
for (let a = 91; a <= 129; a += 2) {
  sum = sum + a;
}
console.log('sum of odd number 91 to 129', sum);
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */
let total = 0;
for (let b = 51; b <= 85; b += 2) {
  total = total + b;
}
console.log('sum of even number 51  to 85', total);
/***

Generate a multiplication table for number 9

 */
for (let k = 1; k <= 10; k++) {
  console.log('5 x', k, '=', 5 * k);
}
/***

Implement a countdown timer that counts down from 81 to 65.

 */

for (let v = 81; v >= 65; v--) {
  console.log('start count down', v);
}
