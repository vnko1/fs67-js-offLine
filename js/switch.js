const option = 2;
let message;

switch (option) {
  case 1:
    message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе ';
    break;

  case 2:
    message = 'Курьер доставит Ваш заказ завтра с 09:00 до 18:00';
    break;

  case 3:
    message = 'Посылка будет отправлена сегодня';
    break;

  default:
    message = 'Вам перезвонит менеджер';
}

console.log(message);
