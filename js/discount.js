// const totalSpent = 10;
// let payement = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//   discount += 2;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   discount += 5;
// } else if (totalSpent >= 5000) {
//   discount += 15;
// } else {
//   discount += 0;
// }

// payement = payement - payement * (discount / 100);

// console.log(`Оформляем заказ на сумму ${payement} со скидкой ${discount}%.`);

// const totalSpent = 1000000;
// let payement = 500;
// let discount;

// if (totalSpent >= 100 && totalSpent < 1000) {
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   discount = 0.05;
// } else if (totalSpent >= 5000) {
//   discount = 0.15;
// } else {
//   discount = 0;
// }

// payement = payement - payement * discount;

// console.log(
//   `Оформляем заказ на сумму ${payement} со скидкой ${discount * 100}%.`,
// );

// const totalSpent = 1000000;
// let payement = 500;
// let discount;

// if (totalSpent < 100) {
//   discount = 0;
// } else if (totalSpent >= 100 && totalSpent < 1000) {
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   discount = 0.05;
// } else {
//   discount = 0.15;
// }

// payement = payement - payement * discount;

// console.log(
//   `Оформляем заказ на сумму ${payement} со скидкой ${discount * 100}%.`,
// );

const totalSpent = 50000;
let payement = 5000;
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
  discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
  discount = 0.05;
} else if (totalSpent >= 5000) {
  discount = 0.15;
} else {
  console.log('Нет скидки');
}

payement = payement - payement * discount;

console.log(
  `Оформляем заказ на сумму ${payement} со скидкой ${discount * 100}%.`,
);

// if (totalSpent >= 100 && totalSpent < 1000) {
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   discount = 0.05;
// } else if (totalSpent >= 5000) {
//   discount = 0.15;
// }

// payement = payement - payement * discount;

// console.log(
//   `Оформляем заказ на сумму ${payement} со скидкой ${discount * 100}%.`,
// );
