/** Problem -01 ( Divide the Asset ) */

var area = 100;
console.log(area / 2);
area = 15;
console.log(area / 2);
area = 2060;
console.log(area / 2);
//end

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000; /**var money = 45000;-Output: Laptop
                    var money = 9999; -Output: Chocolate*/

if (money >= 25000) {
  console.log('Laptop');
} else if (money >= 10000) {
  console.log('Cycle');
} else {
  console.log('Chocolate');
}
//end

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11; /**lastDay=4 or 6 will be put to get desire output */
for (var day = 1; day <= lastDay; day++) {
  if (day % 3 === 0) {
    console.log(day + ' - medicine');
  } else {
    console.log(day + ' - rest');
  }
}
//end

/** Problem 04 - (Delete / Store) */
var fileName = 'pdfData.jpg';
var ext = fileName.split('.').pop();

if (fileName[0] === '#' || ext === 'pdf' || ext === 'docx') {
  console.log('Store');
} else {
  console.log('Delete');
}

/** Problem 05 - ( PH Email Generator )  */

var students = {
  name: 'jhankar',
  roll: 1014,
  department: 'cse',
};
var extra = '@ph,ac,bd';
console.log(students.name + students.roll + '.' + students.department + extra);
//end

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;

var r = 0.05;
var A = startingSalary * (1 + r) ** experience;

console.log(A.toFixed(2));
//end
