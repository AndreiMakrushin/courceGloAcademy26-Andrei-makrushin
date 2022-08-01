// задание 3
const exercise3 = prompt('Как называется ваш проект?', '');
const title = exercise3;

// задание 4
const exercise4 = prompt('Какие типы экранов нужно разработать?', '');
const screens = exercise4;

// задание 5
const exercise5 = prompt('Сколько будет стоить данная работа?', '');
const screenPrice = parseFloat(exercise5);

// задание 6
const exercise6 = prompt('Нужен ли адаптив на сайте?', '');
const roolback = exercise6;

// задание 7
const servicePrice1 = prompt('Нужна ли админка?', '');
const exe7 = servicePrice1;
const servicePrice2 = prompt('Сколько это будет стоить?', '');
const screenPrice1 = parseFloat(servicePrice2);
const servicePrice3 = prompt('Нужна ли корзина?', '');
const exe72 = servicePrice3;
const servicePrice4 = prompt('Сколько это будет стоить?', '');
const screenPrice2 = parseFloat(servicePrice4);

// задание 8
const fullprice = (screenPrice + screenPrice1 + screenPrice2);

//задание 9
const servicePercentPrice = Math.ceil(Number(fullprice - 2000));
const q = servicePercentPrice
//задание 10
switch (true) {
    case q >= 30000:                                              //+
        console.log("Даем скидку 10%");
        break;
    case q >= 15000 && q < 30000:                                //+
        console.log("Даем скидку 5%");
        break;
    case q >= 0 && q < 15000:                                   //+
        console.log("Скидка не предусмотрена");
        break;
    case q < 0:
        console.log("Что-то пошло не так");                     //+
        break;
    default:
        console.log('ошибка в коде');
}

// консолька
console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(roolback);
console.log(exe7);
console.log(screenPrice1);
console.log(exe72);
console.log(screenPrice2);
console.log(servicePercentPrice);

const adaptive = false;

/*console.log(typeof(title));
console.log(typeof(fullprice));
console.log(typeof(adaptive));
console.log(screens.length);

console.log(screenPrice, 20507772.26, 75740361.35, 13641634.14);
console.log(fullprice, 1661.11, 61349.08, 11049.61);
console.log(screens.toLowerCase().split());
console.log(fullprice * roolback / 100);*/