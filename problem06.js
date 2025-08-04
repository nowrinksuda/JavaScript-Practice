/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;

var r = 0.05;
var A = startingSalary * (1 + r) ** experience;

console.log(A.toFixed(2));
