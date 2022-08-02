const title = prompt('Как называется ваш проект?', '');
const screens = prompt('Какие типы экранов нужно разработать?', '');
const screenPrice = parseFloat(prompt('Сколько будет стоить данная работа?', ''));
const servicePrice1 = parseFloat(prompt('Сколько это будет стоить?', ''));
const servicePrice2 = parseFloat(prompt('Сколько это будет стоить?', ''));
const rollback = 80;
// задание 1 
const getAllServicePrices = function (aservicePrice1, servicePrice2) {
    return aservicePrice1 + servicePrice2
};
const allServicePrices = (getAllServicePrices(servicePrice1, servicePrice2));

// задание 2
function getFullPrice(screenPrice, getAllServicePrices) {
    return screenPrice + getAllServicePrices(servicePrice1, servicePrice2)
};
const fullPrice = (getFullPrice(screenPrice, getAllServicePrices));

// задание 3
const getTitle = function() {
    return title[0].toUpperCase() + title.substr(1).toLowerCase ();
};
    getTitle(); 

//задание 4
const getServicePercentPrices = function (fullPrice, rollback) {
    return fullPrice * rollback / 100
}
const servicePercentPrice = (getServicePercentPrices(fullPrice, rollback));

getRollbackMessage = () => {
    return alert('Скидка 0% поздравляем')
}
getRollbackMessage();

const showTypeOf = (variable) =>{
    alert(typeof(variable));
}
showTypeOf(title);



console.log(screens);