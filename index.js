let title = prompt('Как называется ваш проект?', 'Проект');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice;
const adaptive = confirm('Нужен ли адаптив на сайте?', '');
let service1 ;
let servicePrice1 /*= parseFloat(prompt('Сколько это будет стоить?', '2000'))*/;
let service2  ;
let servicePrice2 /*= parseFloat(prompt('Сколько это будет стоить?', '2000'))*/;
const rollback = 50;

//-----------------------------------------------------------------------------------------------------------------------------------------
const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)   
}

do {
    screenPrice = +prompt('Сколько будет стоить данная работа?', '15000');
  } while (!isNumber(screenPrice));

//---------------------------------------------------------------

// задание 1 
function getAllServicePrices() {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        let price;
        if (i === 0){
            service1 = prompt('Какой дополнительный тип услуги нужен?', 'Корзина');
        }else if (i === 1){
            service2 = prompt('Какой дополнительный тип услуги нужен?', 'Админка');
        } 
        do {
            price = +prompt('Сколько это будет стоить?', '2000');
        } while (!isNumber(price));
         sum += price
 
    }
    
    return sum 
}
const allServicePrices = (getAllServicePrices());
                                                                                 

// задание 2
function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices
};
 const fullPrice = (getFullPrice(screenPrice, allServicePrices));
                                                                            

// задание 3
const getTitle = function(str) {
    const title = str.trim().toLowerCase();
      
    return title[0].toUpperCase() + title.substr(1);
  };
  
  title = getTitle(title);
  screens = screens.trim().split(', ');
//задание 4
const getServicePercentPrices = function (fullPrice, rollback) {
    return fullPrice - (fullPrice * rollback / 100);
}
  const servicePercentPrice = (getServicePercentPrices(fullPrice, rollback));
                                                                                    

const showTypeOf = function(variable){
    return typeof(variable , typeof variable);
}
                                                                                    

getRollbackMessage = () =>{
    console.log('скидка 0%');
}
const RollbackMessage = getRollbackMessage();                        
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
console.log(servicePrice2);
console.log(rollback);
console.log(servicePercentPrice);
//----------------------------------------
console.log(allServicePrices);
console.log(fullPrice);
console.log(showTypeOf(title));
console.log(showTypeOf(screenPrice));
console.log(showTypeOf(adaptive));