// задание 3
const title = prompt('Как называется ваш проект?', '');

// задание 4
const screens = prompt('Какие типы экранов нужно разработать?', '');

// задание 5
const screenPrice = parseFloat(prompt('Сколько будет стоить данная работа?', ''));

// задание 6
const adaptive = prompt('Нужен ли адаптив на сайте?', '');

// задание 7
const service1 = prompt('Нужна ли админка?', '');
const servicePrice1 = parseFloat(prompt('Сколько это будет стоить?', ''));
const service2 = prompt('Нужна ли корзина?', '');
const servicePrice2 = parseFloat(prompt('Сколько это будет стоить?', ''));

// задание 8
const fullprice = (screenPrice + servicePrice1 + servicePrice2);

//задание 9
const rollback = 80;
const servicePercentPrice = Math.ceil(Number(fullprice * rollback / 100));

//задание 10
switch (true) {
    case servicePercentPrice >= 30000:                                              
        console.log("Даем скидку 10%");
        break;
    case servicePercentPrice >= 15000:                                
        console.log("Даем скидку 5%");
        break;
    case servicePercentPrice >= 0:                                   
        console.log("Скидка не предусмотрена");
        break;
    default:
        console.log("Что-то пошло не так");
        break;
}

console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(adaptive);
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log(fullprice);
console.log(rollback);
console.log(servicePercentPrice);