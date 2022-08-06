const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    rollback: 50,
    asking: function(){
        this.title = prompt('Как называется ваш проект?', 'Проект');
        this.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
        do {
            this.screenPrice = +prompt('Сколько будет стоить данная работа?', '15000');
           
          } while (!this.isNumber(appData.screenPrice));
          
          this.adaptive = confirm('Нужен ли адаптив на сайте?', '')
    },
    //------------------------------------------------
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)   
    },
    //------------------------------------------------
    getAllServicePrices: function () {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            let price;
            if (i === 0){
                this.service1 = prompt('Какой дополнительный тип услуги нужен?', 'Корзина');
            }else if (i === 1){
                this.service2 = prompt('Какой дополнительный тип услуги нужен?', 'Админка');
            } 
            do {
                price = +prompt('Сколько это будет стоить?', '2000');
            } while (!this.isNumber(price));
             sum += price
     
        }
        return sum 
    },
    //---------------------------------------------
    getFullPrice: function () {
        return this.screenPrice + this.allServicePrices
    },
    //---------------------------------------------
    getTitle: function () {   
        return this.title.trim()[0].toUpperCase() + this.title.trim().substr(1).toLowerCase();
      },
    //---------------------------------------------
    getServicePercentPrices: function () {
        return this.fullPrice - (this.fullPrice * this.rollback / 100);
    },
    //---------------------------------------------
    getRollbackMessage: function() {
        switch (true) {
            case this.servicePercentPrice >= 30000:                                              
                console.log("Даем скидку 10%");
                break;
            case this.servicePercentPrice >= 15000:                                
                console.log("Даем скидку 5%");
                break;
            case this.servicePercentPrice >= 0:                                   
                console.log("Скидка не предусмотрена");
                break;
            default:
                console.log("Что-то пошло не так");
                break;
        }
    },
    logger: function(){
        for (let key in appData){
            console.log("Ключ " + key + " " + "Значение " + appData[key]);
        }
    },
    start: function(){
       this.asking();
       this.allServicePrices =  this.getAllServicePrices();
       this.fullPrice = this.getFullPrice();
       this.servicePercentPrice = this.getServicePercentPrices();
       this.logger();   
    }
    
}

appData.start();




