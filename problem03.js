/** Problem -03 ( Medicine Planner ) */
var lastDay = 11; /**lastDay=4 or 6 will be put to get desire output */
for (var day = 1; day <= lastDay; day++) {
  if (day % 3 === 0) {
    console.log(day + ' - medicine');
  } else {
    console.log(day + ' - rest');
  }
}
