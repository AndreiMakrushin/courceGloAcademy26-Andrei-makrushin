// задание 3
const title = prompt('Как называется ваш проект?', '');
console.log(title);

// задание 4
const screens = prompt('Какие типы экранов нужно разработать?', '');
console.log(screens);

// задание 5
const screenPrice = parseFloat(prompt('Сколько будет стоить данная работа?', ''));
console.log(screenPrice);
// задание 6
const adaptive = prompt('Нужен ли адаптив на сайте?', '');
console.log(adaptive);

// задание 7
const service1 = prompt('Нужна ли админка?', '');
console.log(service1);
const servicePrice1 = parseFloat(prompt('Сколько это будет стоить?', ''));
console.log(servicePrice1);
const service2 = prompt('Нужна ли корзина?', '');
console.log(service2);
const servicePrice2 = parseFloat(prompt('Сколько это будет стоить?', ''));
console.log(servicePrice2);

// задание 8
const fullprice = (screenPrice + servicePrice1 + servicePrice2);
console.log(fullprice);

//задание 9
const servicePercentPrice = Math.ceil(Number(fullprice - 2000));
console.log(servicePercentPrice);

//задание 10
switch (true) {
    case servicePercentPrice >= 30000:                                              
        console.log("Даем скидку 10%");
        break;
    case servicePercentPrice >= 15000 && servicePercentPrice < 30000:                                
        console.log("Даем скидку 5%");
        break;
    case servicePercentPrice >= 0 && servicePercentPrice < 15000:                                   
        console.log("Скидка не предусмотрена");
        break;
    case servicePercentPrice < 0:
        console.log("Что-то пошло не так");                     
        break;
    default:
        console.log('ошибка в коде');
}