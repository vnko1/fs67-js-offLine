// for (let i = 100; i >= -10; i -= 15) {
//   console.log(i);
// }

const minSalary = 500;
const maxSalary = 5000;
const employees = 5;
let totalSalary = 0;

// const salary = (Math.random() * (maxSalary - minSalary) + minSalary).toFixed(0);
// console.log(salary);
// console.log(`Общая ЗП: ${totalSalary} гривен`);

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary,
//   );

//   console.log(`ЗП сотрудника № ${i}: ${salary}`);
//   totalSalary += salary;
// }
// console.log(`Общая ЗП: ${totalSalary} гривен`);

const min = 10;
const max = 50;
let total = 0;

for (let i = min; i <= max; i += 1) {
  if (i % 2 !== 0) {
    continue;
  }
  total += i;
}
console.log(total);

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     // console.log(i);
//     total += i;
//   }
// }
// console.log(total);

// for (let i = min; i <= max; i += 1) {
//   console.log(i);
//   switch (i % 2) {
//     case 0:
//       console.log('четное:', i);
//       total += i;
//       break;
//   }
// }

// console.log(total);
