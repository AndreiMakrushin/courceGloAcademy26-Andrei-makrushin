let title = prompt('Как называется ваш проект?', '');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
const screenPrice = parseFloat(prompt('Сколько будет стоить данная работа?', ''));
const adaptive = confirm('Нужен ли адаптив на сайте?', '');
const service1 = prompt('Какой дополнительный тип услуги нужен?', 'Корзина');
const servicePrice1 = parseFloat(prompt('Сколько это будет стоить?', ''));
const service2 = prompt('Какой дополнительный тип услуги нужен?', 'Админка');
const servicePrice2 = parseFloat(prompt('Сколько это будет стоить?', ''));
const rollback = 80;

//-----------------------------------------------------------------------------------------------------------------------------------------
screens = screens.trim().split(', ');
// задание 1 
const getAllServicePrices = function (servicePrice1, servicePrice2) {
    return servicePrice1 + servicePrice2
};
const allServicePrices = (getAllServicePrices(servicePrice1, servicePrice2));
                                                                                 

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