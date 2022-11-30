let balance = 10000;
const payement = 20000;

console.log(
  `Общая стоимость заказа ${payement} кредитов. Проверяем  кол-во доступных средств на счету`,
);
if (balance >= payement) {
  balance -= payement;
  console.log(`На счету осталось ${balance} кредитов`);
} else {
  console.log('На счету недостаточно средств для проведения операции!');
}

console.log('Операция завершена');
