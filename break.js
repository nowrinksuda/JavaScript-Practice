/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/
for (let i = 1; i <= 200; i++) {
  if (i === 100) {
    break; //break when find 100
  }
  console.log(i);
}
/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let sum = 0;
let num = 1;

while (true) {
  sum += num;
  if (sum >= 100) {
    break;
  }
  num++;
}

console.log('Sum reached or exceeded 100:', sum);
console.log('Last number added:', num);
/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
for (let i = 1; i <= 100; i++) {
  // বর্গ সংখ্যা চেক করতে: সংখ্যার স্কয়ার রুট যদি পূর্ণসংখ্যা হয়
  let sqrt = Math.sqrt(i);
  if (Number.isInteger(sqrt)) {
    break; // প্রথম বর্গ সংখ্যা পাওয়া মাত্র লুপ থেমে যাবে
  }
  console.log(i);
}
