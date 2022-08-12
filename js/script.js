const title = document.getElementsByTagName('h1')[0]                                                           //
//-------------------------------------------------------------------------

const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]
//------------------------------------------------------------------------

const buttonPlus = document.querySelector('.screen-btn')
//-----------------------------------------------------------------------

const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const otherItemsNumber = document.querySelectorAll('.other-items.number ')
//------------------------------------------------------------------------

const inputRange = document.querySelector('.rollback input[type="range"]')
const inputRangeValue = document.querySelector('.rollback .range-value')
//----------------------------------------------------------------------

const total = document.getElementsByClassName("total-input")[0]
const totalCount = document.getElementsByClassName("total-input")[1]
const totalCountOther = document.getElementsByClassName("total-input")[2]
const fullTotalCount = document.getElementsByClassName("total-input")[3]
const totalCountRollback = document.getElementsByClassName("total-input")[4]
//-----------------------------------------------------------------------

let screen = document.querySelectorAll('.screen')
console.log(screen)

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    rollback: 50,
    asking: function(){
                
            do {
                appData.title = prompt('Как называется ваш проект?', 'Проект');
            } while (appData.isNumber(appData.title));

          for (let i = 0; i < 2; i++){
            do {
                name = prompt('Какие типы экранов нужно разработать?');
            } while (appData.isNumber(name));
            
            let price; 
            do {
                price = +prompt('Сколько будет стоить данная работа?', '15000');
              } while (!appData.isNumber(price));
           appData.screens.push({id: i, name: name, price: price})
          }

          for (let i = 0; i < 2; i++) {
            do {
                 name = prompt('Какой дополнительный тип услуги нужен?', 'Корзина');
            } while (appData.isNumber(name));
            
            let price;                                                                                  
            do {
                price = +prompt('Сколько это будет стоить?', '2000');
            } while (!appData.isNumber(price));

            appData.services[name] = +price
        }
          appData.adaptive = confirm('Нужен ли адаптив на сайте?', '')

          
    },
    
    //------------------------------------------------
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num) && num.length !== 0
    },
    //------------------------------------------------
    getAllServicePrices: function () {
        appData.screenPrice = appData.screens.reduce((sum, current) => sum + current.price, 0);
        for (let key in appData.services){
            appData.allServicePrices += appData.services[key];
        }
    },
    //---------------------------------------------
    getFullPrice: function () {
        appData.fullPrice =  appData.screenPrice + appData.allServicePrices
    },
    //---------------------------------------------
    getTitle: function () {   
        appData.title =  appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
      },
    //---------------------------------------------
    getServicePercentPrices: function () {
        appData.servicePercentPrice =  appData.fullPrice - (appData.fullPrice * appData.rollback / 100);
    },
    //---------------------------------------------
    getRollbackMessage: function() {
        switch (true) {
            case appData.servicePercentPrice >= 30000:                                              
                console.log("Даем скидку 10%");
                break;
            case appData.servicePercentPrice >= 15000:                                
                console.log("Даем скидку 5%");
                break;
            case appData.servicePercentPrice >= 0:                                   
                console.log("Скидка не предусмотрена");
                break;
            default:
                console.log("Что-то пошло не так");
                break;
        }
    },
    logger: function(){
       /* for (let key in appData){
            console.log("Ключ " + key + " " + "Значение " + appData[key]);
        }*/
        console.log(appData.screens);
        console.log(appData.services);
        console.log(appData.allServicePrices);
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);

    },
    start: function(){
       appData.asking();
        appData.getAllServicePrices();
       appData.getFullPrice();
       appData.getServicePercentPrices();
       appData.getTitle();
       appData.logger();   
    }
    
}

appData.start();